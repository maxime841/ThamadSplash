<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use App\Models\Attraction;
use App\Models\Party;
use App\Models\Price;
use App\Models\Rental;
use App\Models\School;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $timeline = collect()

        ->merge(
            Attraction::latest()->take(3)->get()->map(fn ($item) => [
                'type' => 'Attraction',
                'title' => $item->title,
                'date' => $item->created_at,
                'icon' => 'ferris',
            ])
        )

        ->merge(
            Activity::latest()->take(3)->get()->map(fn ($item) => [
                'type' => 'Activité',
                'title' => $item->title,
                'date' => $item->created_at,
                'icon' => 'activity',
            ])
        )

        ->merge(
            Rental::latest()->take(3)->get()->map(fn ($item) => [
                'type' => 'Location',
                'title' => $item->title,
                'date' => $item->created_at,
                'icon' => 'house',
            ])
        )

        ->merge(
            Party::latest()->take(3)->get()->map(fn ($item) => [
                'type' => 'Soirée',
                'title' => $item->title,
                'date' => $item->created_at,
                'icon' => 'party',
            ])
        )

        ->sortByDesc('date')
        ->take(10)
        ->values();

        return Inertia::render('Admin/Dashboard', [

            'stats' => [

                'attractions' => Attraction::count(),
                'activities'  => Activity::count(),
                'rentals'     => Rental::count(),
                'schools'     => School::count(),
                'prices'      => Price::count(),
                'parties'     => Party::count(),
                'users'       => User::count(),

            ],

            'drafts' => [

                'attractions' => Attraction::where('published', false)
                    ->latest()
                    ->take(5)
                    ->get(),

                'activities' => Activity::where('published', false)
                    ->latest()
                    ->take(5)
                    ->get(),

                'rentals' => Rental::where('published', false)
                    ->latest()
                    ->take(5)
                    ->get(),

                'schools' => School::where('published', false)
                    ->latest()
                    ->take(5)
                    ->get(),

                'prices' => Price::where('published', false)
                    ->latest()
                    ->take(5)
                    ->get(),

                'parties' => Party::where('published', false)
                    ->latest()
                    ->take(5)
                    ->get(),

            ],

            'timeline' => $timeline,

        ]);
    }
}