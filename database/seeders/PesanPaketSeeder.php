<?php

namespace Database\Seeders;

use App\Models\Paket;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PesanPaketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pakets = [
            ['nama_paket'=>'Testing',
            'detail_paket'=>'bismillah'
            ],
            ['nama_paket'=>'big',
            'detail_paket'=>'plis',
            ],
        ];
        foreach ($pakets as $paket)
        {
            Paket::create($paket);
        }
    }
}
