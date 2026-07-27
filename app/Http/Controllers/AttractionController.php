<?php

namespace App\Http\Controllers;

use App\Models\Attraction;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AttractionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
{
    $search = $request->string('search');

    $attractions = Attraction::query()
        ->when($search, function ($query, $search) {
            $query->where('title', 'like', "%{$search}%");
        })
        ->latest()
        ->paginate(10)
        ->withQueryString();

    return Inertia::render('Admin/Attractions/Index', [
        'attractions' => $attractions,
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
    return Inertia::render('Admin/Attractions/Create');
}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $validated = $request->validate([
        'title' => ['required', 'string', 'max:255'],
        'subtitle' => ['nullable', 'string', 'max:255'],
        'description' => ['required', 'string'],
        'category' => ['nullable', 'string', 'max:255'],
        'cover_image' => ['nullable', 'image', 'max:2048'],
        'min_age' => ['nullable', 'integer', 'min:0'],
        'min_height' => ['nullable', 'integer', 'min:0'],
        'sort_order' => ['nullable', 'integer', 'min:0'],
        'published' => ['boolean'],
    ]);

    if ($request->hasFile('cover_image')) {
        $validated['cover_image'] = $request
            ->file('cover_image')
            ->store('attractions', 'public');
    }

    $validated['slug'] = Str::slug($validated['title']) . '-' . time();

    Attraction::create($validated);

    return redirect()
        ->route('admin.attractions.index')
        ->with('success', 'Attraction créée avec succès.');
}

    /**
     * Display the specified resource.
     */
    public function publicShow(Attraction $attraction)
{
    abort_unless($attraction->published, 404);
    $related = Attraction::where('published', true)
        ->where('id', '!=', $attraction->id)
        ->orderBy('sort_order')
        ->take(3)
        ->get();

    return Inertia::render('Site/Attractions/Show', [
        'attraction' => $attraction,
        'related' => $related,
    ]);
}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Attraction $attraction): Response
{
    return Inertia::render('Admin/Attractions/Edit', [
        'attraction' => $attraction,
    ]);
}

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Attraction $attraction)
{
    $validated = $request->validate([
        'title' => ['required', 'string', 'max:255'],
        'subtitle' => ['nullable', 'string', 'max:255'],
        'description' => ['required', 'string'],
        'category' => ['nullable', 'string', 'max:255'],
        'cover_image' => ['nullable', 'image', 'max:2048'],
        'min_age' => ['nullable', 'integer', 'min:0'],
        'min_height' => ['nullable', 'integer', 'min:0'],
        'sort_order' => ['nullable', 'integer', 'min:0'],
        'published' => ['boolean'],
    ]);

    if ($request->hasFile('cover_image')) {

        if ($attraction->cover_image) {
            Storage::disk('public')->delete($attraction->cover_image);
        }

        $validated['cover_image'] = $request
            ->file('cover_image')
            ->store('attractions', 'public');
    }

    $validated['slug'] = Str::slug($validated['title']);

    $attraction->update($validated);

    return redirect()
        ->route('admin.attractions.index')
        ->with('success', 'Attraction mise à jour avec succès.');
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Attraction $attraction)
{
    if ($attraction->cover_image) {
        Storage::disk('public')->delete($attraction->cover_image);
    }

    $attraction->delete();

    return redirect()
        ->route('admin.attractions.index')
        ->with('success', 'Attraction supprimée avec succès.');
}

public function publicIndex()
{
    $attractions = Attraction::where('published', true)
        ->orderBy('sort_order')
        ->get();

    return Inertia::render('Site/Attractions/Index', [
        'attractions' => $attractions,
    ]);
}
}
