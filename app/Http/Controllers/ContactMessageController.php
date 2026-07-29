<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactMessageController extends Controller
{
    /**
     * Liste des messages.
     */
    public function index(Request $request): Response
    {
        $messages = ContactMessage::query()
            ->when(
                $request->search,
                fn ($query, $search) =>
                    $query->where('name', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%")
                        ->orWhere('subject', 'like', "%{$search}%")
            )
            ->latest()
            ->paginate(15)
            ->withQueryString();

        return Inertia::render('Admin/ContactMessages/Index', [
            'messages' => $messages,
            'filters' => [
                'search' => $request->search,
            ],
        ]);
    }

    /**
     * Enregistrement depuis le site.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'    => ['required', 'string', 'max:255'],
            'email'   => ['required', 'email'],
            'phone'   => ['nullable', 'string', 'max:30'],
            'subject' => ['required', 'string', 'max:255'],
            'message' => ['required', 'string'],
        ]);

        ContactMessage::create($validated);

        return back()->with(
            'success',
            'Votre message a bien été envoyé. Nous vous répondrons rapidement.'
        );
    }

    /**
     * Affichage d'un message.
     */
    public function show(ContactMessage $contactMessage): Response
    {
        if (! $contactMessage->is_read) {

            $contactMessage->update([
                'is_read' => true,
            ]);

        }

        return Inertia::render('Admin/ContactMessages/Show', [
            'message' => $contactMessage,
        ]);
    }

    /**
     * Suppression.
     */
    public function destroy(ContactMessage $contactMessage)
    {
        $contactMessage->delete();

        return back()->with(
            'success',
            'Le message a été supprimé.'
        );
    }
}