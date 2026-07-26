<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\PartyController;
use App\Http\Controllers\AttractionController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\PriceController;
use App\Http\Controllers\RentalController;

Route::get('/', function () {
    return Inertia::render('Accueil', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/site', fn() => Inertia::render('Site'));
Route::get('/parc', fn() => Inertia::render('Parc'));
Route::get('/school', fn() => Inertia::render('Ecole'));
Route::get('/club', fn() => Inertia::render('Club'));
Route::get('/rent', fn() => Inertia::render('Location'));
Route::get('/activities', fn() => Inertia::render('Activites'));
Route::get('/contact', fn() => Inertia::render('Contact'));

/*
|--------------------------------------------------------------------------
| Auth
|--------------------------------------------------------------------------
*/

Route::get('/login', [AuthController::class, 'loginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

/*
|--------------------------------------------------------------------------
| Administration
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {

    Route::get('/', [DashboardController::class, 'index']);
});

Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {

    Route::resource('parties', PartyController::class);
    Route::resource('attractions', AttractionController::class);
    Route::resource('activities', ActivityController::class);
    Route::resource('prices', PriceController::class);
    Route::resource('rentals', RentalController::class);
});

