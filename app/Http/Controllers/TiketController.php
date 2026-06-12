<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateTiketRequest;
use App\Models\Paket;
use App\Models\Payment;
use App\Models\Tiket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TiketController extends Controller
{
    public function index()
    {
        $tikets = Tiket::all()->sortByDesc('status');

        return view('admin.tiket', compact('tikets'));
    }

    public function create()
    {
        $availableTickets = Paket::where('kuota', '>', 0)->get();
        $tiket = auth()->user()->tiket()->with('user', 'paket')->first();

        if ($tiket) {
            return Inertia::render('Ticketing3', [
                'payment' => $tiket->payment()->first(),
                'tiket' => $tiket,
            ]);
        }

        if ($availableTickets->isNotEmpty()) {
            return Inertia::render('TicketingMain', [
                'tickets' => $availableTickets,
                'error' => null,
            ]);
        }

        return Inertia::render('noTicket');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'phone' => 'required',
            'line' => 'required',
            'id' => 'required|exists:pakets,id',
        ]);

        if ($request->user()->tiket()->exists()) {
            return redirect(route('ticketing'));
        }

        $created = DB::transaction(function () use ($request, $validated) {
            $paket = Paket::whereKey($validated['id'])->lockForUpdate()->firstOrFail();

            if ($paket->kuota <= 0) {
                return false;
            }

            $paket->decrement('kuota');

            $tiket = Tiket::create([
                'user_id' => $request->user()->id,
                'paket_id' => $paket->id,
                'line' => $validated['line'],
                'phone' => $validated['phone'],
            ]);

            Payment::create([
                'tiket_id' => $tiket->id,
            ]);

            return true;
        });

        if (! $created) {
            return Inertia::render('TicketingMain', [
                'tickets' => Paket::where('kuota', '>', 0)->get(),
                'error' => "Ticket Sold Out :')",
            ]);
        }

        return redirect(route('ticketing'));
    }

    public function storeBukti(Request $request)
    {
        $request->validate([
            'bukti_pemb' => 'required|image|mimes:png,jpg,jpeg',
        ]);

        $tiket = auth()->user()->tiket()->firstOrFail();
        $payment = $tiket->payment()->firstOrFail();

        $fileName = time() . '.' . $request->file('bukti_pemb')->extension();
        $request->file('bukti_pemb')->move(public_path('buktiPembayaran'), $fileName);

        $payment->bukti_bayar = $fileName;
        $payment->save();

        $tiket->status = 2;
        $tiket->save();

        return redirect(route('ticketing'));
    }

    public function delete(Request $request)
    {
        $tiket = Tiket::findOrFail($request->input('tiket_id'));
        $tiket->delete();

        return back()->with('alert', 'Tiket berhasil dihapus.');
    }

    public function edit(Request $request, $id)
    {
        $request->validate([
            'status' => 'required',
        ]);

        $tiket = Tiket::findOrFail($id);
        $tiket->status = $request->status;
        $tiket->save();

        return back();
    }

    public function editSeat(Request $request)
    {
        $request->validate([
            'seat' => 'required',
            'tiket_id' => 'required',
        ]);

        if ((int) $request->tiket_id === 0) {
            $tiket = Tiket::where('seat', '=', $request->seat)->firstOrFail();
            $tiket->seat = 0;
            $tiket->save();
        } else {
            $tiket = Tiket::findOrFail($request->tiket_id);
            $tiketBefore = Tiket::where('seat', '=', $request->seat)->first();

            if ($tiketBefore) {
                $tiketBefore->seat = 0;
                $tiketBefore->save();
            }

            $tiket->seat = $request->seat;
            $tiket->save();
        }

        return back();
    }

    public function update(UpdateTiketRequest $request, Tiket $tiket)
    {
        //
    }

    public function destroy(Tiket $tiket)
    {
        //
    }
}
