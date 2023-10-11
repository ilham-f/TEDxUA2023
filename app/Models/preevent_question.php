<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class preevent_question extends Model
{
    use HasFactory;

    public function preevent_answer(): HasMany
    {
        return $this->hasMany(preevent_answer::class, 'id_quest', 'id');
    }
}
