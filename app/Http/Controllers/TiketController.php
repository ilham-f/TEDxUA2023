<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Paket;
use App\Models\Tiket;
use Inertia\Controller;
use Illuminate\Http\Requests;
use App\Http\Requests\StoreTiketRequest;
use App\Http\Requests\UpdateTiketRequest;
use Illuminate\Http\Request;
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
        $count = Paket::where('kuota', '>', 0)->get()->count();
        if (auth()->user()->tiket()->first()) {
            return Inertia::render('Ticketing3', [
                'payment' => auth()->user()->tiket()->first()->payment()->first(),
                'tiket' =>  auth()->user()->tiket()->with('user', 'paket')->first()
            ]);
        } elseif ($count > 0) {
            // dd(Paket::where('kuota', '>', 0)->first()->id);
            return Inertia::render('TicketingMain', [
                'tickets' => Paket::where('kuota', '>', 0)->get(),
                'error' => null
            ]);
        } else {
            return Inertia::render('noTicket');
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $user_id = $request->user()->id;

        $validated = $request->validate([
            'phone' => 'required',
            'line' => 'required',
            'id' => 'required'
        ]);

        $paket = Paket::find($validated['id']);

        if ($paket->kuota > 0) {
            $tiket = Tiket::create([
                "user_id" => $user_id,
                "paket_id" => $validated['id'],
                "line" => $validated['line'],
                "phone" => $validated['phone']
            ]);

            $payment = Payment::create([
                "tiket_id" => $tiket->id,
            ]);

            $currentQuota = $paket->fresh()->kuota;
            if ($currentQuota > 0) {
                $paket->kuota--;
                $paket->save();
            } else {
                $tiket->delete();
                $payment->delete();
                return Inertia::render('TicketingMain', [
                    'tickets' => Paket::where('kuota', '>', 0)->get(),                 'error' => "Ticket Sold Out :')"
                ]);
            }
        } else {
            return Inertia::render('TicketingMain', [
                'tickets' => Paket::where('kuota', '>', 0)->get(),             'error' => "Ticket Sold Out :')"
            ]);
        }

        return redirect(route('ticketing'));
    }

    public function storeBukti(Request $request)
    {

        $payment = auth()->user()->tiket()->first()->payment()->first();
        $tiket = auth()->user()->tiket()->first();

        // dd($payment);

        $validated = $request->validate([
            'id' => 'required',
            'bukti_pemb' => 'required|image|mimes:png,jpg,jpeg',
        ]);

        // dd($request->files);

        $fileName = time() . '.' . $request->file('bukti_pemb')->extension();
        $request->file('bukti_pemb')->move(public_path('buktiPembayaran'), $fileName);

        $payment->bukti_bayar = $fileName;
        $payment->save();

        $tiket->status = 2;
        $tiket->save();

        return redirect(route('ticketing'));
    }

    /**
     * Display the specified resource.
     */
    public function delete(Request $request)
    {
        $tiket = Tiket::find($request->input('tiket_id'));
        $tiket->delete();

        return back()->with('alert','Tiket berhasil dihapus.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $id)
    {
        $validated = $request->validate([
            'status' => 'required'
        ]);

        $tiket = Tiket::find($id);
        $tiket->status = $request->status;
        $tiket->save();

        return back();
    }

    public function editSeat(Request $request)
    {
        $validated = $request->validate([
            'seat' => 'required',
            'tiket_id' => 'required'
        ]);
        // dd($request);

        if ($request->tiket_id == 0) {
            $tiket = Tiket::where('seat','=',$request->seat)->first();

            $tiket->seat = 0;
            $tiket->save();
        }
        else{
            $tiket = Tiket::find($request->tiket_id);
            $tiketBefore = Tiket::where('seat','=',$request->seat)->first();
            if ($tiketBefore) {
                $tiketBefore->seat = 0;
                $tiketBefore->save();
            }
            $tiket->seat = $request->seat;
            $tiket->save();
        }

        return back();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTiketRequest $request, Tiket $tiket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tiket $tiket)
    {
        //
    }
}
