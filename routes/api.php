<?php

use App\Http\Controllers\AuthController;
use App\Jobs\OTPMailJob;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('send-OTPmail', function () {
    $data['email'] = 'bgd.tech0505@gmail.com';

    dispatch(new OTPMailJob($data));

    return 'success';
});

Route::get('sendAgainOtp', [AuthController::class, 'sendAgainOtp']);
Route::post('sendAgainOtp', [AuthController::class, 'sendAgainOtp']);
