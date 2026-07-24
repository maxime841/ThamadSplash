<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePartyRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'required|max:255',
            'subtitle' => 'nullable|max:255',
            'description' => 'required',
            'event_date' => 'nullable|date',
            'event_time' => 'nullable',
            'dj' => 'nullable|max:255',
            'cover_image' => 'nullable|image|max:2048',
            'published' => 'boolean',
        ];
    }
}