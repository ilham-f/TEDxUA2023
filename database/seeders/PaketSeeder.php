<?php

namespace Database\Seeders;

use App\Models\paket;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PaketSeeder extends Seeder
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
            paket::create($paket);
        }
    }
}