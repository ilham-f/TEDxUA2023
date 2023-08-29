<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AnswerController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Preevent1', []);
})->name('preevent1');

Route::get('/after', function () {
    return Inertia::render('Preevent1After', []);
})->name('preevent1After');

Route::post('/preevent1', [AnswerController::class, 'store']);