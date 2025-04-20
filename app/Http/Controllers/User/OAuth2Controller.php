<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth; 



class OAuth2Controller extends Controller
{
    public function githubRedirect() {
        return Socialite::driver('github')->redirect();
    }

    public function githubCallback() {
        $githubUser = Socialite::driver('github')->user();

        $user = User::updateOrCreate([
            'email' => $githubUser->email,
        ], [
            'name' => $githubUser->name,
            'email' => $githubUser->email,
            'password' => Hash::make(Str::random(50)),
            'github_token' => $githubUser->token,
            'github_refresh_token' => $githubUser->refresh_token,
            'email_verified_at' => now(),
        ]);

        Auth::login($user);
        return redirect(route('user.create'));
    }

    public function gitlabRedirect() {
        return Socialite::driver('gitlab')->redirect();
    }


    public function gitlabCallback() {
        $gitlabUser = Socialite::driver('gitlab')->user();


        $user = User::updateOrCreate([
            'email' => $gitlabUser->email,
        ], [
            'name' => $gitlabUser->name,
            'email' => $gitlabUser->email,
            'password' => Hash::make(Str::random(50)),
            'gitlab_token' => $gitlabUser->token,
            'gitlab_refresh_token' => $gitlabUser->refreshToken,
            'email_verified_at' => now(),
        ]);
        

        Auth::login($user);
        return redirect(route('user.create'));
    }
}
