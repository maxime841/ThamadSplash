<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
{
    $users = User::query()
        ->when(
            $request->search,
            fn ($query, $search) =>
                $query->where('name', 'like', "%{$search}%")
                      ->orWhere('email', 'like', "%{$search}%")
        )
        ->orderBy('name')
        ->paginate(10)
        ->withQueryString();

    return inertia('Admin/Users/Index', [
        'users' => $users,
        'filters' => [
            'search' => $request->search,
        ],
    ]);
}

    /**
     * Show the form for creating a new resource.
     */
    public function create()
{
    return inertia('Admin/Users/Create');
}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $validated = $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'email', 'unique:users,email'],
        'password' => ['required', 'confirmed', 'min:8'],
        'role' => ['required', 'in:admin,super-admin'],
    ]);

    User::create([
        'name' => $validated['name'],
        'email' => $validated['email'],
        'password' => Hash::make($validated['password']),
        'role' => $validated['role'],
    ]);

    return redirect()
        ->route('admin.users.index')
        ->with('success', 'Administrateur créé avec succès.');
}

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
{
    return inertia('Admin/Users/Edit', [
        'user' => $user,
    ]);
}

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'email',
                'unique:users,email,' . $user->id,
            ],
            'role' => ['required', 'in:admin,super-admin'],
            'password' => ['nullable', 'confirmed', 'min:8'],
        ]);

        if (
            auth::id() === $user->id &&
            $validated['role'] !== $user->role
        ) {
            return back()->withErrors([
                'role' => 'Vous ne pouvez pas modifier votre propre rôle.',
            ]);
        }

        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->role = $validated['role'];

        if (!empty($validated['password'])) {
            $user->password = Hash::make($validated['password']);
        }

        $user->save();

    return redirect()
        ->route('admin.users.index')
        ->with('success', 'Administrateur mis à jour.');
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
{
    if (auth::id() === $user->id) {
        return back()->with(
            'error',
            'Vous ne pouvez pas supprimer votre propre compte.'
        );
    }

    $user->delete();

    return back()->with(
        'success',
        'Administrateur supprimé.'
    );
}
}
