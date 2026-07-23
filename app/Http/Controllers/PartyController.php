<?php

namespace App\Http\Controllers;

use App\Models\Party;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

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
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => 'nullable|max:255',
            'description' => 'required',
            'event_date' => 'nullable|date',
            'event_time' => 'nullable',
            'dj' => 'nullable|max:255',
            'cover_image' => 'nullable|image|max:2048',
            'published' => 'boolean',
        ]);

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
    public function update(Request $request, Party $party)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'subtitle' => 'nullable|max:255',
            'description' => 'required',
            'event_date' => 'nullable|date',
            'event_time' => 'nullable',
            'dj' => 'nullable|max:255',
            'cover_image' => 'nullable|image|max:2048',
            'published' => 'boolean',
        ]);

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
}