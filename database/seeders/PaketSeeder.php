<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Paket;

class PaketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Paket::create([
            'nama_paket'=>'Presale 1',
            'detail_paket'=>'1x Main Event Ticket',
            'harga' => 85000
        ]);
    }
}
