<?php

namespace App\Http\Controllers;

use App\Models\Paket;
use App\Models\Payment;
use App\Models\Tiket;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str; // Import Str
use App\Http\Requests\StorePaymentRequest; // Import form request

class PaymentController extends Controller
{
    public function index()
    {
        $payments = Payment::all();

        return view('payments.payments-table', compact('payments'));
    }

    public function create()
    {
        $users = User::all();
        // $tikets = Tiket::all();
        // $pakets = Paket::all();

        return view('payments.payments-create', compact('users'));
    }

    public function store(StorePaymentRequest $request)
    {
        if ($request->validated()) {
            $gambar = $request->file('bukti_bayar')->store('assets', 'public');
            $slug = Str::slug($request->bukti_bayar, '-');

            Payment::create($request->except('bukti_bayar') + ['bukti_bayar' => $gambar, 'slug' => $slug]);
        }

        $payments = Payment::all(); // Mengambil data pembayaran setelah disimpan

        return view('payments.payments-table', compact('payments'))->with([
            'message' => 'data sukses dibuat',
            'alert-type' => 'success'
        ]);


        }

    public function show($id)
    {
        $payment = Payment::findOrFail($id);

        return view('payments.payments-show', compact('payment'));
    }

    public function edit($id)
    {
        $payment = Payment::findOrFail($id);
        $users = User::all();

        return view('payments.payments-edit', compact('payment', 'users'));
    }

    public function update(StorePaymentRequest $request, $id)
    {
        $validatedData = $request->validated();

        $payment = Payment::findOrFail($id);

        if ($request->hasFile('bukti_bayar')) {
            // Upload bukti bayar jika ada
            $gambar = $request->file('bukti_bayar')->store('assets/bukti_bayar', 'public');
            $payment->bukti_bayar = $gambar;
        }

        $payment->update($validatedData);

        return redirect()->route('payments-index');
    }

    public function destroy($id)
    {
        $payment = Payment::findOrFail($id);
        $payment->delete();

        return redirect()->route('payments-index');
    }
}
