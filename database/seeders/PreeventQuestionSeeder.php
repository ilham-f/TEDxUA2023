<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PreeventQuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $questions = [
            "Apa itu Tedx?",
            "Siapa pencetus Tedx?",
            "Apa perbedaan Ted dan Tedx?",
            "Tahun ini Tedx uner yang keberapa?",
            "Apa saja divisi yang ada di Tedx uner?",
            "Bagaimana struktur organisasinya?",
            "Siapa manager webdev?",
            "Siapa co-manager webdev?",
            "Webdev masuk ke PL berapa?",
            "Webdev keren?"
        ];

        foreach ($questions as $question) {
            DB::table('preevent_questions')->insert([
                'questions' => $question,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
