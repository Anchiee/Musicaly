<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;


Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/terms', function() {
    return Inertia::render('Tos');
});

Route::get('/privacy', function() {
    return Inertia::render('Privacy');
});


Route::middleware('guest')->group(function() {
    Route::get('/login', [AuthenticatedSessionController::class, 'create']);
});
