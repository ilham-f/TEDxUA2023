<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class preevent_answer extends Model
{
    use HasFactory;

    public function preevent_question(): HasMany
    {
        return $this->hasMany(preevent_question::class, 'id_quest', 'id');
    }
}
