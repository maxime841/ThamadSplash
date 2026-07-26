<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attraction extends Model
{
    protected $fillable = [
    'title',
    'slug',
    'subtitle',
    'description',
    'category',
    'cover_image',
    'min_age',
    'min_height',
    'sort_order',
    'published',
];
}
