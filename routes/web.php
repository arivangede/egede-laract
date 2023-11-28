<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BerkaskuController;
use App\Http\Controllers\Fitur\DataDesaController;
use App\Http\Controllers\Fitur\EnewsController;
use App\Http\Controllers\GuestAppController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\UserProfileController;
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

Route::middleware(['auth'])->group(function () {
    Route::get('/', [GuestAppController::class, 'index'])->name('user.home');

    Route::get('/pilih-desa', function () {
        return Inertia::render('PilihDesa');
    })->name('user.pilihdesa');

    Route::get('/e-news', [EnewsController::class, 'index'])->name('user.enews');
    Route::get('/e-news/{id}', [EnewsController::class, 'show'])->name('user.show.enews');
    Route::get('/create-pengumuman', [EnewsController::class, 'pengumuman']);

    Route::get('/data-desa', [DataDesaController::class, 'index'])->name('user.datadesa');
    Route::post('/data-desa', [DataDesaController::class, 'index']);
    Route::get('/data-desa/analisa-data', [DataDesaController::class, 'analisa'])->name('user.analisadata');
    Route::post('/data-desa/analisa-data', [DataDesaController::class, 'analisa']);
    Route::get('/data-desa/analisa-data/show/{nik}', [DataDesaController::class, 'show'])->name('user.showdata');

    Route::post('/likes', [LikeController::class, 'store']);
    Route::post('/likes/{id}', [LikeController::class, 'destroy']);

    Route::get('/aktivitas', function () {
        return Inertia::render('Aktivitas');
    });
    Route::get('/notifikasi', function () {
        return Inertia::render('Notifikasi');
    });
    Route::get('/profil', function () {
        return Inertia::render('Profil');
    });
    Route::get('/dataku', function () {
        return Inertia::render('DataKu');
    });

    Route::get('/dataku/berkasku', [BerkaskuController::class, 'index'])->name('user.berkasku');
    Route::post('/dataku/berkasku/ktp', [BerkaskuController::class, 'updateKtp']);
    Route::post('/dataku/berkasku/kk', [BerkaskuController::class, 'updateKk']);
    Route::post('/dataku/berkasku/delete-ktp', [BerkaskuController::class, 'destroyKtp']);
    Route::post('/dataku/berkasku/delete-kk', [BerkaskuController::class, 'destroyKK']);
    Route::get('/dataku/editprofil', [UserProfileController::class, 'index'])->name('user.profile');
    Route::post('/dataku/editprofil', [UserProfileController::class, 'edit']);
    Route::post('/changeprofile', [UserProfileController::class, 'update']);
    Route::post('/deleteprofile', [UserProfileController::class, 'destroy']);
});


Route::get('/login', [AuthController::class, 'index'])->name('user.login')->middleware('guest');
Route::post('/login', [AuthController::class, 'login']);
Route::get('/register', [AuthController::class, 'register'])->name('user.register');
Route::get('/logout', [AuthController::class, 'logout']);

Route::post('/register', [AuthController::class, 'generateOTP']);
Route::get('/verify', [AuthController::class, 'verifyPage'])->name('user.verify');
Route::post('/verify', [AuthController::class, 'verifyOTP']);





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
