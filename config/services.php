<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'resend' => [
        'key' => env('RESEND_KEY'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

    'github' => [
        'client_id' => 'Iv23li2WQu3NsLbAFH93',
        'client_secret' => env('GITHUB_SECRET'),
        'redirect' => 'http://127.0.0.1:8000/github/callback'
    ],

    'gitlab' => [
        'client_id' => '4329b5e5d3202bb73c3537279fdc10517f258313e05acbd3bde409b67fe1aa6b',
        'client_secret' => env('GITLAB_SECRET'),
        'redirect' => 'http://127.0.0.1:8000/gitlab/callback'
    ],

];
