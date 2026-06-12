<?php

namespace App\Http\Controllers;

use App\Mail\PartnershipEmail;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class PartnershipController extends Controller
{

    public function showForm()
    {
        return Inertia::render('Partnership');
    }


    public function sendEmail(Request $request)
    {
        $data = $request->validate([
            'nama' => 'required|string',
            'instansi' => 'required|string',
            'jabatan' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email',
            'deskripsi' => 'required|string',
            'other' => 'required|string',
        ]);

        Mail::to(config('mail.partnership_to'))->send(new PartnershipEmail($data));

        return redirect()->back();
    }
}
