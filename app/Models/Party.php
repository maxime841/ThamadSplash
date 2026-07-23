<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
}
