<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use App\Models\Attraction;
use App\Models\ContactMessage;
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
        $stats = [

            'attractions' => Attraction::count(),

            'activities' => Activity::count(),

            'rentals' => Rental::count(),

            'schools' => School::count(),

            'prices' => Price::count(),

            'parties' => Party::count(),

            'users' => User::count(),

            'messages' => ContactMessage::count(),

            'unreadMessages' => ContactMessage::where('is_read', false)->count(),

        ];

        $drafts = [

            'attractions' => Attraction::where('published', false)->get(),

            'activities' => Activity::where('published', false)->get(),

            'rentals' => Rental::where('published', false)->get(),

            'schools' => School::where('published', false)->get(),

            'prices' => Price::where('published', false)->get(),

            'parties' => Party::where('published', false)->get(),

        ];

        $latestMessages = ContactMessage::latest()
            ->take(5)
            ->get();

        $latestUsers = User::latest()
            ->take(5)
            ->get();

        return Inertia::render('Admin/Dashboard', [

            'stats' => $stats,

            'drafts' => $drafts,

            'latestMessages' => $latestMessages,

            'latestUsers' => $latestUsers,

            'timeline' => $timeline,

        ]);
    }
}