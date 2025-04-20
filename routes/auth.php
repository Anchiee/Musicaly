<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\User\UserController;


Route::middleware("guest")->group(function() {
    Route::post("/login", [AuthenticatedSessionController::class, "store"])->middleware('throttle:5,15')->name("session.store");
    Route::post("/sign", [RegisteredUserController::class, "store"])->middleware('throttle:3,60')->name("registered.store");
});

Route::middleware("auth")->group(function() {
    Route::get('/email/verify', [VerifyEmailController::class, "create"])->name("verification.notice");

    Route::get("/email/verify/{id}/{hash}", [VerifyEmailController::class, "verify"])->middleware("signed")->name("verification.verify");

    Route::post("/email/verify", [VerifyEmailController::class, "store"])->middleware("throttle:6,1")->name("verification.send");
});