<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'tiket_id',
    ];

    public function tikets()
    {
        return $this->belongsTo(Tiket::class, 'tiket_id', 'id');
    }
}
