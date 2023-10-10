<?php

namespace App\Http\Controllers;

use App\Mail\PartnershipEmail;
use Illuminate\Http\Request;

use App\Models\User;

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;


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
            'why' => 'required|string',
            'other' => 'required|string',
        ]);


        // Kirim email menggunakan Mail::to() dan templat email yang sesuai.
        Mail::to('b.satrya31@gmail.com')->send(new PartnershipEmail($data));

        return redirect()->back();
    }
}
