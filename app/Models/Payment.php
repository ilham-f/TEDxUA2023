<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Payment extends Model
{
    use HasFactory;

    public function tikets(): BelongsTo
    {
        return $this->belongsTo(Tiket::class, 'id_tiket', 'id');
    }
}
