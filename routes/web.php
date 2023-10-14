<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PreeventAnswerController;
use App\Http\Controllers\PreeventQuestionController;


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

Route::get('/partnership', function () {
    return Inertia::render('Partnership', []);
})->name('partnership');

Route::get('/ticketing', function () {
    return Inertia::render('Ticketing3', [
        'tickets' => [
            ['id' => 1, 'name' => 'Bundling Ticket 1'],
            ['id' => 2, 'name' => 'Bundling Ticket 2'],
            ['id' => 3, 'name' => 'Bundling Ticket 3'],
            ['id' => 4, 'name' => 'Bundling Ticket 4'],
            ['id' => 5, 'name' => 'Bundling Ticket 5'],
        ]
    ]);
})->name('ticketing');

Route::get('/after', function () {
    return Inertia::render('Preevent1After', []);
})->name('preevent1After');

Route::post('/preevent1', [PreeventAnswerController::class, 'store']);

Route::get('pre-event-1/{questionNumber}', [PreeventQuestionController::class, 'showQuestion']);
