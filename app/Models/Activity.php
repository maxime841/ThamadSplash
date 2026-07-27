<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $fillable = [
    'title',
    'slug',
    'subtitle',
    'description',
    'category',
    'cover_image',
    'sort_order',
    'published',
];

public function getRouteKeyName(): string
{
    return 'slug';
}
}
