<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    protected $fillable = [
        'path',
        'alt',
        'sort_order',
        'is_cover',
    ];

    public function mediable()
    {
        return $this->morphTo();
    }
}