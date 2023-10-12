<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Tiket extends Model
{
    use HasFactory;

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_users', 'id');
    }

    public function pakets()

    {
        return $this->belongsTo(Paket::class, 'id_paket', 'id');
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }
}
