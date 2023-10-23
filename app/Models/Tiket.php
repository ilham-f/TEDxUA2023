<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Tiket extends Model
{
    use HasFactory;

    protected $table = 'tikets';

    protected $fillable = [
        'user_id',
        'paket_id',
        'line',
        'phone'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function paket()
    {
        return $this->belongsTo(Paket::class, 'paket_id', 'id');
    }

    public function payment()
    {
        return $this->hasMany(Payment::class);
    }
}

// <?php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\Relations\BelongsTo;

// class Tiket extends Model
// {
//     protected $fillable = [
//         'id_user',
//         'id_tiket',
//         'id_paket',
//         'total_harga',
//         'status',
//         'bukti_bayar',
//         'slug',
//     ];

//     protected $casts = [
//         'total_harga' => 'integer',
//         'status' => 'boolean',
//     ];

//     public function user(): BelongsTo
//     {
//         return $this->belongsTo(User::class);
//     }
// }
