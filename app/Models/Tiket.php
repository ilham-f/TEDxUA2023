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

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_users', 'id');
    }

    public function pakets()
    {
        return $this->belongsTo(Paket::class, 'id_paket', 'id');
    }

    public static function alldata()
    {
        return DB::table('tikets')
        ->leftjoin('pakets', 'pakets.id', '=', 'tikets.id_paket')
        ->leftjoin('users', 'users.id', '=', 'tikets.id_user')
        ->get();
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
