<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\User\UserController;



Route::middleware("guest")->group(function() {
    Route::post("/login", [AuthenticatedSessionController::class, "store"])->name("session.store");
    Route::post("/sign", [RegisteredUserController::class, "store"])->name("registered.store");
});

