<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Models\Price;

class PriceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
{
    $search = $request->string('search');

    $prices = Price::query()
        ->when($search, function ($query, $search) {
            $query->where('title', 'like', "%{$search}%");
        })
        ->latest()
        ->paginate(10)
        ->withQueryString();

    return Inertia::render('Admin/Prices/Index', [
        'prices' => $prices,
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
    return Inertia::render('Admin/Prices/Create');
}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $validated = $request->validate([
        'title' => ['required', 'string', 'max:255'],
        'description' => ['nullable', 'string'],
        'price' => ['required', 'numeric'],
        'category' => ['nullable', 'string', 'max:255'],
        'cover_image' => ['nullable', 'image', 'max:2048'],
        'sort_order' => ['nullable', 'integer'],
        'published' => ['boolean'],
    ]);

    if ($request->hasFile('cover_image')) {
        $validated['cover_image'] = $request
            ->file('cover_image')
            ->store('prices', 'public');
    }

    $validated['slug'] = Str::slug($validated['title']) . '-' . time();

    Price::create($validated);

    return redirect()
        ->route('admin.prices.index')
        ->with('success', 'Tarif créé avec succès.');
}

    /**
     * Display the specified resource.
     */
    public function show(Price $price)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Price $price): Response
{
    return Inertia::render('Admin/Prices/Edit', [
        'price' => $price,
    ]);
}

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Price $price)
{
    $validated = $request->validate([
        'title' => ['required', 'string', 'max:255'],
        'description' => ['nullable', 'string'],
        'price' => ['required', 'numeric'],
        'category' => ['nullable', 'string', 'max:255'],
        'cover_image' => ['nullable', 'image', 'max:2048'],
        'sort_order' => ['nullable', 'integer'],
        'published' => ['boolean'],
    ]);

    if ($request->hasFile('cover_image')) {

        if ($price->cover_image) {
            Storage::disk('public')->delete($price->cover_image);
        }

        $validated['cover_image'] = $request
            ->file('cover_image')
            ->store('prices', 'public');
    }

    $validated['slug'] = Str::slug($validated['title']) . '-' . time();

    $price->update($validated);

    return redirect()
        ->route('admin.prices.index')
        ->with('success', 'Tarif mis à jour avec succès.');
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Price $price)
{
    if ($price->cover_image) {
        Storage::disk('public')->delete($price->cover_image);
    }

    $price->delete();

    return redirect()
        ->route('admin.prices.index')
        ->with('success', 'Tarif supprimé avec succès.');
}

public function publicIndex()
{
    $prices = Price::query()
        ->where('published', true)
        ->orderBy('category')
        ->orderBy('sort_order')
        ->get()
        ->groupBy('category');

    return Inertia::render('Site/Prices/Index', [
        'prices' => $prices,
    ]);
}
}
