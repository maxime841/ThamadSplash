<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Attraction;
use App\Models\Party;
use App\Models\Price;
use App\Models\Rental;
use App\Models\School;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Site/Home', [

            'parties' => Party::where('published', true)
                ->take(3)
                ->get(),

            'attractions' => Attraction::where('published', true)
                ->orderBy('sort_order')
                ->take(6)
                ->get(),

            'activities' => Activity::where('published', true)
                ->orderBy('sort_order')
                ->take(6)
                ->get(),

            'rentals' => Rental::where('published', true)
                ->orderBy('sort_order')
                ->take(3)
                ->get(),

            'schools' => School::where('published', true)
                ->orderBy('sort_order')
                ->take(3)
                ->get(),

            'prices' => Price::where('published', true)
                ->orderBy('sort_order')
                ->get(),

        ]);
    }
}