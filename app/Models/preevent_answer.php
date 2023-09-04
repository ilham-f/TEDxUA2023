<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class preevent_answer extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function preevent_questions()
    {
        return $this->belongsTo(preevent_question::class);
    }
}
