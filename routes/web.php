<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BerkaskuController;
use App\Http\Controllers\Fitur\DataDesaController;
use App\Http\Controllers\Fitur\EnewsController;
use App\Http\Controllers\GuestAppController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\PanelAdminController;
use App\Http\Controllers\ProfilDesaController;
use App\Http\Controllers\SubProfilDesaController;
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
    Route::get('/create-pengumuman', [EnewsController::class, 'pengumuman'])->name('user.createpengumuman');
    Route::get('/create-berita', [EnewsController::class, 'berita'])->name('user.createberita');
    Route::post('/create-pengumuman', [EnewsController::class, 'createpengumuman']);
    Route::post('/create-berita', [EnewsController::class, 'createberita']);

    Route::get('/panel-admin', [PanelAdminController::class, 'paneladmin'])->name('user.paneladmin');
    Route::get('/panel-admin/e-news', [PanelAdminController::class, 'enews'])->name('user.panelenews');
    Route::post('/panel-admin/e-news/delete/berita{id}', [PanelAdminController::class, 'deleteberita']);
    Route::post('/panel-admin/e-news/delete/pengumuman{id}', [PanelAdminController::class, 'deletepengumuman']);

    Route::get('/data-desa', [DataDesaController::class, 'index'])->name('user.datadesa');
    Route::post('/data-desa', [DataDesaController::class, 'index']);
    Route::get('/data-desa/analisa-data', [DataDesaController::class, 'analisa'])->name('user.analisadata');
    Route::post('/data-desa/analisa-data', [DataDesaController::class, 'analisa']);
    Route::get('/data-desa/analisa-data/show/{nik}', [DataDesaController::class, 'show'])->name('user.showdata');

    Route::get('/profil-desa', [ProfilDesaController::class, 'index'])->name('user.profildesa');
    Route::get('/profil-desa/wilayah-desa', [ProfilDesaController::class, 'wilayahdesa'])->name('user.wilayahdesa');
    Route::get('/profil-desa/sejarah-desa', [ProfilDesaController::class, 'sejarahdesa'])->name('user.sejarahdesa');
    Route::get('/profil-desa/visi-misi', [ProfilDesaController::class, 'visimisi'])->name('user.visimisidesa');
    Route::get('/profil-desa/struktur-pemerintahan', [ProfilDesaController::class, 'struktur'])->name('user.strukturpemerintahan');
    Route::get('/profil-desa/lpm', [ProfilDesaController::class, 'lpm'])->name('user.lpmdesa');
    Route::get('/profil-desa/sub/{title}', [SubProfilDesaController::class, 'index'])->name('user.sub');

    Route::post('/likes', [LikeController::class, 'store']);
    Route::post('/likes/{id}', [LikeController::class, 'destroy']);
    ROute::post('/bookmarks', [ActivityController::class, 'storebookmark']);
    ROute::post('/bookmarks/{id}', [ActivityController::class, 'destroybookmark']);

    Route::get('/aktivitas', [ActivityController::class, 'index'])->name('user.activity');
    Route::post('/aktivitas', [ActivityController::class, 'index']);
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

Route::get('/lupa-password', [AuthController::class, 'lupapassword'])->name('user.lupapassword');
Route::post('/lupa-password', [AuthController::class, 'lupapassword']);
Route::get('/resetpassword/{token}', [AuthController::class, 'resetpassword'])->name('user.resetpassword');
Route::post('/resetpassword/{token}', [AuthController::class, 'resetpassword']);
Route::get('/success', function () {
    return Inertia::render('Auth/Success');
})->name('user.success');





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
