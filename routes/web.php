<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Fitur\DataDesaController;
use App\Http\Controllers\Fitur\EnewsController;
use App\Http\Controllers\GuestAppController;
use App\Http\Controllers\LikeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', [GuestAppController::class, 'index'])->name('user.home')->middleware('auth');
Route::get('/aktivitas', function () {
    return Inertia::render('Aktivitas');
});
Route::get('/notifikasi', function () {
    return Inertia::render('Notifikasi');
});
Route::get('/profil', function () {
    return Inertia::render('Profil');
});

Route::get('/login', [AuthController::class, 'index'])->name('user.login')->middleware('guest');
Route::post('/login', [AuthController::class, 'login']);
Route::get('/logout', [AuthController::class, 'logout']);


Route::get('/e-news', [EnewsController::class, 'index'])->name('user.enews')->middleware('auth');
Route::get('/e-news/{id}', [EnewsController::class, 'show'])->name('user.show.enews')->middleware('auth');

Route::get('/data-desa', [DataDesaController::class, 'index'])->name('user.datadesa')->middleware('auth');
Route::post('/data-desa', [DataDesaController::class, 'index'])->name('user.datadesa')->middleware('auth');
Route::get('/data-desa/analisa-data', [DataDesaController::class, 'analisa'])->name('user.datadesa')->middleware('auth');
Route::post('/data-desa/analisa-data', [DataDesaController::class, 'analisa'])->name('user.datadesa')->middleware('auth');


Route::post('/likes', [LikeController::class, 'store'])->middleware('auth');
Route::post('/likes/{id}', [LikeController::class, 'destroy'])->middleware('auth');


// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__ . '/auth.php';
