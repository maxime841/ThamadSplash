<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'description',
        'price',
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
