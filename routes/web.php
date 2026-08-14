<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PartyController;
use App\Http\Controllers\AttractionController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\PriceController;
use App\Http\Controllers\RentalController;
use App\Http\Controllers\SchoolController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactMessageController;
use App\Http\Controllers\SettingController;

    Route::get('/', [HomeController::class, 'index'])
    ->name('home');
    Route::get('/attractions', [AttractionController::class, 'publicIndex'])
    ->name('attractions.index');
    Route::get('/attractions/{attraction:slug}', [AttractionController::class, 'publicShow'])
    ->name('attractions.show');

    Route::get('/activities', [ActivityController::class, 'publicIndex'])
    ->name('activities.index');
    Route::get('/activities/{activity:slug}', [ActivityController::class, 'publicShow'])
    ->name('activities.show');

    Route::get('/parties', [PartyController::class, 'publicIndex'])
    ->name('parties.index');

    Route::get('/parties/{party:slug}', [PartyController::class, 'publicShow'])
    ->name('parties.show');

    Route::get('/rentals', [RentalController::class, 'publicIndex'])
    ->name('rentals.index');

    Route::get('/rentals/{rental:slug}', [RentalController::class, 'publicShow'])
    ->name('rentals.show');

    Route::get('/schools', [SchoolController::class, 'publicIndex'])
    ->name('schools.index');

    Route::get('/schools/{school:slug}', [SchoolController::class, 'publicShow'])
    ->name('schools.show');

    Route::get('/prices', [PriceController::class, 'publicIndex'])
    ->name('prices.index');
    Route::get('/contact', function () {return Inertia::render('Site/Contact');})->name('contact');
    Route::post('/contact',[ContactMessageController::class, 'store'])->name('contact.store');
/*
|--------------------------------------------------------------------------
| Auth
|--------------------------------------------------------------------------
*/

Route::get('/login', [AuthController::class, 'loginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
Route::get('/register', [AuthController::class, 'loginForm'])->name('register');
Route::post('/login', [AuthController::class, 'login']);
/*
|--------------------------------------------------------------------------
| Administration
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'admin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {

        Route::get('/', [DashboardController::class, 'index'])
            ->name('dashboard');
        Route::resource('parties', PartyController::class);
        Route::resource('attractions', AttractionController::class);
        Route::resource('activities', ActivityController::class);
        Route::resource('prices', PriceController::class);
        Route::resource('rentals', RentalController::class);
        Route::resource('schools', SchoolController::class);
        Route::get('/settings', [SettingController::class, 'index'])->name('settings.index');
        Route::put('/settings', [SettingController::class, 'update'])->name('settings.update');
       Route::resource('contact-messages', ContactMessageController::class)->only(['index', 'show', 'destroy']);
    });

    Route::middleware(['auth', 'super-admin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {

        Route::resource('users', UserController::class);

    });


