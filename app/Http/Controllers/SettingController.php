<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SettingController extends Controller
{
    public function index(): Response
    {
        $settings = Setting::pluck('value', 'key');

        return Inertia::render('Admin/Settings/Index', [
            'settings' => $settings,
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'site_name' => ['nullable', 'string', 'max:255'],
            'site_slogan' => ['nullable', 'string', 'max:255'],

            'email' => ['nullable', 'email'],
            'phone' => ['nullable', 'string', 'max:255'],
            'address' => ['nullable', 'string'],

            'facebook' => ['nullable', 'url'],
            'instagram' => ['nullable', 'url'],
            'youtube' => ['nullable', 'url'],
            'tiktok' => ['nullable', 'url'],
        ]);

        foreach ($validated as $key => $value) {
            Setting::set($key, $value);
        }

        return back()->with(
            'success',
            'Les paramètres ont été enregistrés.'
        );
    }
}