<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RedirectAuthenticatedUsersController extends Controller
{
    public function home()
    {
        if (auth()->user()->role == 'admin') {
            return redirect('/admin');
        }
        elseif(auth()->user()->role == 'user'){
            return redirect('/home');
        }
        else{
            return auth()->logout();
        }
    }
}
