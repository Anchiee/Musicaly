<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\User\OAuth2Controller;


Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/terms', function() {
    return Inertia::render('Tos');
});

Route::get('/privacy', function() {
    return Inertia::render('Privacy');
});

Route::get('/mission', function() {
    return Inertia::render('Mission');
});

Route::get('/about', function() {
    return Inertia::render('About');
});


Route::middleware('guest')->group(function() {
    Route::get('/login', [AuthenticatedSessionController::class, 'create']);
    Route::get('/sign', [RegisteredUserController::class, 'create']);


    Route::get('/github/redirect', [OAuth2Controller::class, 'githubRedirect']);
    Route::get('/github/callback', [OAuth2Controller::class, 'githubCallback']);

    Route::get('/gitlab/redirect', [OAuth2Controller::class, 'gitlabRedirect']);
    Route::get('/gitlab/callback', [OAuth2Controller::class, 'gitlabCallback']);
});


Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/dashboard', [UserController::class, 'create'])->name('user.create');
});



require __DIR__ . "/auth.php";