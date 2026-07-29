<?php

namespace App\Http\Controllers;

use App\Models\Party;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

use App\Http\Requests\StorePartyRequest;
use App\Http\Requests\UpdatePartyRequest;

class PartyController extends Controller
{
public function index(Request $request)
{
    $search = $request->search;

    $parties = Party::when($search, function ($query) use ($search) {
        $query->where('title', 'like', "%{$search}%")
              ->orWhere('dj', 'like', "%{$search}%");
    })
    ->latest()
    ->paginate(10)
    ->withQueryString();

    return Inertia::render('Admin/Parties/Index', [
        'parties' => $parties,
        'filters' => [
            'search' => $search,
        ],
    ]);
}

    /**
     * Formulaire de création.
     */
    public function create()
    {
        return Inertia::render('Admin/Parties/Create');
    }

    /**
     * Enregistrement d'une nouvelle soirée.
     */
    public function store(StorePartyRequest $request)
    {
        $validated = $request->validated();

        $validated['slug'] = Str::slug($validated['title']);

        if ($request->hasFile('cover_image')) {
            $validated['cover_image'] = $request->file('cover_image')->store('parties', 'public');
        }

        Party::create($validated);

        return redirect()->route('admin.parties.index')
            ->with('success', 'Soirée créée avec succès.');
    }

    /**
     * Formulaire de modification.
     */
    public function edit(Party $party)
    {
        return Inertia::render('Admin/Parties/Edit', [
            'party' => $party,
        ]);
    }

    /**
     * Mise à jour d'une soirée.
     */
    public function update(UpdatePartyRequest $request, Party $party)
    {
        $validated = $request->validated();

        $validated['slug'] = Str::slug($validated['title']);

        if ($request->hasFile('cover_image')) {

            if ($party->cover_image) {
            Storage::disk('public')->delete($party->cover_image);
            }

            $validated['cover_image'] = $request
                ->file('cover_image')
                ->store('parties', 'public');
        }

        $party->update($validated);

        return redirect()->route('admin.parties.index')
            ->with('success', 'Soirée modifiée avec succès.');
    }

    /**
     * Suppression d'une soirée.
     */
    public function destroy(Party $party)
{
    if ($party->cover_image) {
        Storage::disk('public')->delete($party->cover_image);
    }

    $party->delete();

    return redirect()->route('admin.parties.index')
        ->with('success', 'Soirée supprimée avec succès.');
}

public function publicIndex()
{
    $parties = Party::query()
        ->where('published', true)
        ->orderBy('sort_order')
        ->get();

    return Inertia::render('Site/Parties/Index', [
        'parties' => $parties,
    ]);
}

public function publicShow(Party $party)
{
    abort_unless($party->published, 404);

    $related = Party::query()
        ->where('published', true)
        ->whereKeyNot($party->id)
        ->orderBy('sort_order')
        ->limit(3)
        ->get();

    $previous = Party::query()
        ->where('published', true)
        ->where('sort_order', '<', $party->sort_order)
        ->orderByDesc('sort_order')
        ->first();

    $next = Party::query()
        ->where('published', true)
        ->where('sort_order', '>', $party->sort_order)
        ->orderBy('sort_order')
        ->first();

    return Inertia::render('Site/Parties/Show', [
        'party' => $party,
        'related' => $related,
        'previous' => $previous,
        'next' => $next,
    ]);
}
}