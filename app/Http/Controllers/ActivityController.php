<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
{
    $search = $request->string('search');

    $activities = Activity::query()
        ->when($search, function ($query, $search) {
            $query->where('title', 'like', "%{$search}%");
        })
        ->latest()
        ->paginate(10)
        ->withQueryString();

    return Inertia::render('Admin/Activities/Index', [
        'activities' => $activities,
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
    return Inertia::render('Admin/Activities/Create');
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
        'sort_order' => ['nullable', 'integer', 'min:0'],
        'published' => ['boolean'],
    ]);

    if ($request->hasFile('cover_image')) {
        $validated['cover_image'] = $request
            ->file('cover_image')
            ->store('activities', 'public');
    }

    $validated['slug'] = Str::slug($validated['title']) . '-' . time();

    Activity::create($validated);

    return redirect()
        ->route('admin.activities.index')
        ->with('success', 'Activité créée avec succès.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Activity $activity)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Activity $activity)
    {
        return Inertia::render('Admin/Activities/Edit', [
        'activity' => $activity,
    ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Activity $activity)
    {
        $validated = $request->validate([
        'title' => ['required', 'string', 'max:255'],
        'subtitle' => ['nullable', 'string', 'max:255'],
        'description' => ['required', 'string'],
        'category' => ['nullable', 'string', 'max:255'],
        'cover_image' => ['nullable', 'image', 'max:2048'],
        'sort_order' => ['nullable', 'integer', 'min:0'],
        'published' => ['boolean'],
    ]);

    if ($request->hasFile('cover_image')) {

        if ($activity->cover_image) {
            Storage::disk('public')->delete($activity->cover_image);
        }

        $validated['cover_image'] = $request
            ->file('cover_image')
            ->store('activities', 'public');
    }

    $validated['slug'] = Str::slug($validated['title']);

    $activity->update($validated);

    return redirect()
        ->route('admin.activities.index')
        ->with('success', 'Activité mise à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Activity $activity)
    {
        if ($activity->cover_image) {
        Storage::disk('public')->delete($activity->cover_image);
    }

    $activity->delete();

    return redirect()
        ->route('admin.activities.index')
        ->with('success', 'Activité supprimée avec succès.');
    }
}
