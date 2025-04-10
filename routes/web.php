<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/terms', function() {
    return Inertia::render('Tos');
});

Route::get('/privacy', function() {
    return Inertia::render('Privacy');
});