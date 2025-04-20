<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;


class OAuth2Controller extends Controller
{
    public function githubRedirect() {
        return Socialite::driver('github')->redirect();
    }

    public function githubCallback() {
        $githubUser = Socialite::driver('github')->user();

        $user = User::updateOrCreate([
            'github_id' => $githubUser->id
        ], [
            'name' => $githubUser->name,
            'email' => $githubUser->email,
            'github_token' => $githubUser->token,
            'github_refresh_token' => $githubUser->refresh_token
        ]);

        Auth::login($user);

        return redirect(route('session.create'));
    }

    public function gitlabRedirect() {
        return Socialite::driver('gitlab')->redirect();
    }


    public function gitlabCallback() {
        $gitlabUser = Socialite::driver('gitlab')->user();

        $user = User::updateOrCreate([
            'gitlab_id' => $gitlabUser->id
        ], [
'           name' => $gitlabUser->name,
            'email' => $gitlabUser->email,
            'gitlab_token' => $gitlabUser->token,
            'gitlab_refresh_token' => $gitlabUser->refresh_token
        ]);

        Auth::login($user);
        return redirect(route('session.create'));
    }
}
