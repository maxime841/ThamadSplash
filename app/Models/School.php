<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'subtitle',
        'description',
        'category',
        'cover_image',
        'price',
        'duration',
        'capacity',
        'sort_order',
        'published',
    ];
}
