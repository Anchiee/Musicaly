<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\User\UserController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;

Route::middleware("guest")->group(function() {
    Route::post("/login", [AuthenticatedSessionController::class, "store"])->name("session.store");
    Route::post("/sign", [RegisteredUserController::class, "store"])->name("registered.store");
});

Route::middleware("auth")->group(function() {
    Route::get('/email/verify', function() {
        return Inertia::render("auth/VerifyEmail");
    })->name("verification.notice");

    Route::get("/email/verify/{id}/{hash}", function(EmailVerificationRequest $request) {
        $request->fulfill();

        return redirect(route("user.create"));
    })->middleware("signed")->name("verification.verify");

    Route::post("/email/verify", function(Request $request) {
        $request->user()->sendEmailVerificationNotification();

        return back()->with("message", "Link sent successfully");
    })->middleware("throttle:6,1")->name("verification.send");
});