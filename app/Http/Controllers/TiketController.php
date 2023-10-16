<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Paket;
use App\Models\Tiket;
use App\Http\Requests\StoreTiketRequest;
use App\Http\Requests\UpdateTiketRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TiketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        if(auth()->user()->tiket()->first()){
            return Inertia::render('Ticketing3', [
                'payment' => auth()->user()->tiket()->first()->payments()->first(),
                'tiket' =>  auth()->user()->tiket()->with('user', 'paket')->first()
            ]);
        } else {
            return Inertia::render('TicketingMain', [
                'tickets' => Paket::get()
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        // dd($request);

        $user_id = $request->user()->id;

        $validated = $request->validate([
            'phone' => 'required',
            'line' => 'required',
            'id' => 'required'
        ]);

        // dd($validated);

        $tiket = Tiket::create([
            "user_id" => $user_id,
            "paket_id" => $validated['id'],
            "line" => $validated['line'],
            "phone" => $validated['phone']
        ]);

        Payment::create([
            "tiket_id" => $tiket->id,
        ]);

        // dd($tiket);

        return redirect(route('ticketing'));

    }

    public function storeBukti(Request $request){

        $payment = auth()->user()->tiket()->first()->payments()->first();
        $tiket = auth()->user()->tiket()->first();

        // dd($payment);

        $validated = $request->validate([
            'id' => 'required',
            'bukti_pemb' => 'required|image|mimes:png,jpg,jpeg',
        ]);

        // dd($request->files);

        $fileName = time().'.'.$request->file('bukti_pemb')->extension();
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
    public function show(Tiket $tiket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tiket $tiket)
    {
        //
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
