<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PartyImage extends Model
{
    protected $fillable = [
        'party_id',
        'image',
        'sort_order',
    ];

    public function party()
    {
        return $this->belongsTo(Party::class);
    }
}