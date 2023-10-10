<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PreeventAnswerController;
use App\Http\Controllers\PreeventQuestionController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;


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
    return Inertia::render('main', []);
})->name('main');

Route::get('/login', function () {
    return Inertia::render('Login', []);
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Register', []);
})->name('register');

Route::get('/after', function () {
    return Inertia::render('Preevent1After', []);
})->name('preevent1After');

Route::post('/preevent1', [PreeventAnswerController::class, 'store']);
Route::get('pre-event-1/{questionNumber}', [PreeventQuestionController::class, 'showQuestion']);

Route::get('/sign', [LoginController::class, 'index']);

Route::post('/logout', [LoginController::class, 'logout']);
Route::post('/login', [LoginController::class, 'authenticate']);
Route::post('/regis', [RegisterController::class, 'store']);

Route::group(['middleware' => 'auth'], function() {

    // Halaman yang bisa diakses oleh Admin
    Route::group(['middleware' => 'cekrole:admin'], function() {
        Route::get('/admin', [AdminController::class, 'index']);
        Route::get('/answers-table', [AdminController::class, 'answerstable']);
        Route::get('/questions-table', [AdminController::class, 'questionstable']);
    });

    // Halaman yang bisa diakses oleh Peserta
    // Route::group(['middleware' => ['cekrole:peserta', 'verified']], function() {

    // });

});
