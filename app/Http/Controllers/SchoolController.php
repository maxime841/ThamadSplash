<?php

namespace App\Http\Controllers;

use App\Models\School;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class SchoolController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->string('search');

        $schools = School::query()
            ->when($search, function ($query, $search) {
                $query->where('title', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Schools/Index', [
            'schools' => $schools,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Schools/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['nullable', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'category' => ['nullable', 'string', 'max:255'],
            'price' => ['nullable', 'numeric'],
            'duration' => ['nullable', 'string', 'max:255'],
            'capacity' => ['nullable', 'integer'],
            'sort_order' => ['nullable', 'integer'],
            'published' => ['boolean'],
            'cover_image' => ['nullable', 'image', 'max:2048'],
        ]);

        if ($request->hasFile('cover_image')) {
            $validated['cover_image'] = $request
                ->file('cover_image')
                ->store('schools', 'public');
        }

        $validated['slug'] = Str::slug($validated['title']) . '-' . time();

        School::create($validated);

        return redirect()
            ->route('admin.schools.index')
            ->with('success', 'Formation créée avec succès.');
    }

    public function show(School $school)
    {
        //
    }

    public function edit(School $school): Response
    {
        return Inertia::render('Admin/Schools/Edit', [
            'school' => $school,
        ]);
    }

    public function update(Request $request, School $school)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['nullable', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'category' => ['nullable', 'string', 'max:255'],
            'price' => ['nullable', 'numeric'],
            'duration' => ['nullable', 'string', 'max:255'],
            'capacity' => ['nullable', 'integer'],
            'sort_order' => ['nullable', 'integer'],
            'published' => ['boolean'],
            'cover_image' => ['nullable', 'image', 'max:2048'],
        ]);

        if ($request->hasFile('cover_image')) {

            if ($school->cover_image) {
                Storage::disk('public')->delete($school->cover_image);
            }

            $validated['cover_image'] = $request
                ->file('cover_image')
                ->store('schools', 'public');
        }

        $validated['slug'] = Str::slug($validated['title']) . '-' . time();

        $school->update($validated);

        return redirect()
            ->route('admin.schools.index')
            ->with('success', 'Formation mise à jour avec succès.');
    }

    public function destroy(School $school)
    {
        if ($school->cover_image) {
            Storage::disk('public')->delete($school->cover_image);
        }

        $school->delete();

        return redirect()
            ->route('admin.schools.index')
            ->with('success', 'Formation supprimée avec succès.');
    }
}