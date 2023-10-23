<?php

use App\Http\Controllers\PaketController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\TiketController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MerchQuizController;
use App\Http\Controllers\PartnershipController;
use App\Http\Controllers\PreeventAnswerController;
use App\Http\Controllers\PreeventQuestionController;
use App\Models\Paket;
use App\Models\Payment;
use App\Http\Controllers\Auth\RedirectAuthenticatedUsersController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/', function () {
    return Inertia::render('main', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'isLoggedIn' => auth()->check(),
        'user' => auth()->user(),
    ]);
})->name('main');

Route::get('/partnership', function () {
    return Inertia::render('Partnership', []);
})->name('partnership');

// Route::get('/login', function () {
//     return Inertia::render('Login', []);
// })->name('login');

// Route::get('/register', function () {
//     return Inertia::render('Register', []);
// })->name('register');

Route::get('/merch', function () {
    return Inertia::render('merch', []);
})->name('merch');

Route::get('/gallery', function () {
    return Inertia::render('gallery', []);
})->name('gallery');

Route::get('/detailProduk', function () {
    return Inertia::render('detailProduk', []);
})->name('detailProduk');

//Pre-Event-1
Route::get('/after', function () {
    return Inertia::render('Preevent1After', []);
})->name('preevent1After');

Route::post('/preevent1', [PreeventAnswerController::class, 'store']);
Route::get('pre-event-1/{questionNumber}', [PreeventQuestionController::class, 'showQuestion']);

//Role Authentication
Route::group(['middleware' => 'auth'], function () {
    Route::inertia('/dashboard', 'Dashboard')->name('dashboard');

    Route::get("/redirectAuthenticatedUsers", [RedirectAuthenticatedUsersController::class, "home"]);

    // Route::group(['middleware' => 'role:admin'], function() {
    //     Route::inertia('/admin', 'AdminDashboard')->name('adminDashboard');
    // });

    Route::group(['middleware' => 'role:admin'], function () {
        Route::get('/admin', [AdminController::class, 'index']);
        Route::get('/answers-table', [AdminController::class, 'answer']);
        Route::get('/questions-table', [AdminController::class, 'question']);
        Route::get('/tiket', [TiketController::class, 'index']);

      // Menampilkan semua pembayaran
Route::get('/payments', [PaymentController::class, 'index'])->name('payments-index');
// Menampilkan formulir pembuatan pembayaran
Route::get('/payments/create', [PaymentController::class, 'create'])->name('payments-create');
// Menyimpan pembayaran baru
Route::post('/payments', [PaymentController::class, 'store'])->name('payments-store');
// Menampilkan pembayaran berdasarkan ID
Route::get('/payments/{id}', [PaymentController::class, 'show'])->name('payments-show');
// Menampilkan formulir pembaharuan pembayaran
Route::get('/payments/{id}/edit', [PaymentController::class, 'edit'])->name('payments-edit');
// Menyimpan pembaharuan pembayaran
Route::put('/payments/{id}', [PaymentController::class, 'update'])->name('payments-update');
// Menghapus pembayaran
Route::delete('/payments/{id}', [PaymentController::class, 'destroy'])->name('payments-destroy');

//CRU Paket
Route::get('/packets', [PaketController::class, 'index'])->name('packets-index');
Route::post('/packets-save', [PaketController::class, 'store'])->name('packets-store');
Route::get('/packets-edit/{id}', [PaketController::class, 'edit'])->name('packets-edit');
Route::put('/packets-update/{id}', [PaketController::class, 'update'])->name('packets-update');

    });

    Route::group(['middleware' => 'role:user'], function () {
        Route::inertia('/home', 'main');
    });
});

//Profile
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/ticketing', [TiketController::class, 'create'])->name('ticketing');
    Route::post('/ticketing', [TiketController::class, 'store']);
    Route::post('/payment', [TiketController::class, 'storeBukti'])->name('store.bukti');
});

//Partnership email
Route::get('/partnership', [PartnershipController::class, 'showForm'])->name('partnership.form');
Route::post('/send-partnership-email', [PartnershipController::class, 'sendEmail']);

//Quiz Merch
Route::get('/quiz-merch', function () {
    return Inertia::render('QuizMerch');
});

Route::get('/quiz-merch/after', function () {
    return Inertia::render('QuizMerchAfter');
});

Route::post('/quiz-merch/after', [MerchQuizController::class, 'submitQuiz']);

require __DIR__ . '/auth.php';
