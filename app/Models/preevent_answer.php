<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class preevent_answer extends Model
{
    use HasFactory;

    protected $fillable = [
        'preevent_question_id',
        'answer',
    ];

    public function preevent_question(): BelongsTo
    {
        return $this->belongsTo(preevent_question::class, 'preevent_question_id', 'id');
    }
}
