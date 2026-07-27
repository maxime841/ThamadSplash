<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Media;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Party extends Model
{
    protected $fillable = [
    'title',
    'slug',
    'subtitle',
    'description',
    'event_date',
    'event_time',
    'dj',
    'cover_image',
    'published',
];

public function media(): MorphMany
{
    return $this->morphMany(Media::class, 'mediable')
        ->orderBy('sort_order');
}

public function getRouteKeyName(): string
{
    return 'slug';
}
}
