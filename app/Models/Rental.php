<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rental extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'subtitle',
        'description',
        'category',
        'cover_image',
        'price',
        'prims_allowed',
        'prims_remaining',
        'rental_duration',
        'rental_time_remaining',
        'status',
        'sort_order',
        'published',
    ];

    public function getRouteKeyName(): string
{
    return 'slug';
}
}