<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Accueil', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/site', function () {
    return Inertia::render('Site');
});

Route::get('/parc', function () {
    return Inertia::render('Parc');
});

Route::get('/school', function () {
    return Inertia::render('Ecole');
});

Route::get('/club', function () {
    return Inertia::render('Club');
});

Route::get('/rent', function () {
    return Inertia::render('Location');
});

Route::get('/activities', function () {
    return Inertia::render('Activites');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
