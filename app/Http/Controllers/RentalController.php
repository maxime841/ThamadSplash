<?php

namespace App\Http\Controllers;

use App\Models\Rental;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class RentalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $search = $request->string('search');

        $rentals = Rental::query()
            ->when($search, function ($query, $search) {
                $query->where('title', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Rentals/Index', [
            'rentals' => $rentals,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Rentals/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'                   => ['required', 'string', 'max:255'],
            'subtitle'                => ['nullable', 'string', 'max:255'],
            'description'             => ['nullable', 'string'],
            'category'                => ['nullable', 'string', 'max:255'],
            'price'                   => ['required', 'numeric'],
            'prims_allowed'           => ['required', 'integer'],
            'prims_remaining'         => ['required', 'integer'],
            'rental_duration'         => ['required', 'integer'],
            'rental_time_remaining'   => ['required', 'integer'],
            'status'                  => ['required', 'string'],
            'sort_order'              => ['nullable', 'integer'],
            'published'               => ['boolean'],
            'cover_image'             => ['nullable', 'image', 'max:2048'],
        ]);

        if ($request->hasFile('cover_image')) {
            $validated['cover_image'] = $request
                ->file('cover_image')
                ->store('rentals', 'public');
        }

        $validated['slug'] = Str::slug($validated['title']) . '-' . time();

        Rental::create($validated);

        return redirect()
            ->route('admin.rentals.index')
            ->with('success', 'Location créée avec succès.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Rental $rental)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rental $rental): Response
    {
        return Inertia::render('Admin/Rentals/Edit', [
            'rental' => $rental,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rental $rental)
    {
        $validated = $request->validate([
            'title'                   => ['required', 'string', 'max:255'],
            'subtitle'                => ['nullable', 'string', 'max:255'],
            'description'             => ['nullable', 'string'],
            'category'                => ['nullable', 'string', 'max:255'],
            'price'                   => ['required', 'numeric'],
            'prims_allowed'           => ['required', 'integer'],
            'prims_remaining'         => ['required', 'integer'],
            'rental_duration'         => ['required', 'integer'],
            'rental_time_remaining'   => ['required', 'integer'],
            'status'                  => ['required', 'string'],
            'sort_order'              => ['nullable', 'integer'],
            'published'               => ['boolean'],
            'cover_image'             => ['nullable', 'image', 'max:2048'],
        ]);

        if ($request->hasFile('cover_image')) {

            if ($rental->cover_image) {
                Storage::disk('public')->delete($rental->cover_image);
            }

            $validated['cover_image'] = $request
                ->file('cover_image')
                ->store('rentals', 'public');
        }

        $validated['slug'] = Str::slug($validated['title']) . '-' . time();

        $rental->update($validated);

        return redirect()
            ->route('admin.rentals.index')
            ->with('success', 'Location mise à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rental $rental)
    {
        if ($rental->cover_image) {
            Storage::disk('public')->delete($rental->cover_image);
        }

        $rental->delete();

        return redirect()
            ->route('admin.rentals.index')
            ->with('success', 'Location supprimée avec succès.');
    }
}