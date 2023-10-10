<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function store(Request $request)
    {
        // dd($request);
        $validated = $request->validate([
            'name' => ['required'],
            'email' => ['required', 'unique:users', 'email:rfc,dns'],
            'password' => ['required', 'max:15'],
            'password_confirmation' => ['required', 'same:password']
        ]);
        // dd($validated);

        $validated['password'] = Hash::make($validated['password']);

        User::create($validated);
        return redirect('/sign')->with('alert', 'Pendaftaran berhasil. Silahkan masuk!');

    }
}
