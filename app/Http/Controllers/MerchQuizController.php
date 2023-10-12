<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MerchQuizController extends Controller
{
    public $mostSelectedBundle = [];

    public function submitQuiz(Request $request)
    {
        $answers = $request->answers;

        $answerCounts = array_count_values($answers);
        $mostSelectedAnswer = array_search(max($answerCounts), $answerCounts);

        $bundles = [
            0 => [
                'name' => 'Bundling A',
                'image_url' => '/assets/speaker.png',
                'desc' => 'Tes A'
            ],
            1 => [
                'name' => 'Bundling B',
                'image_url' => '/assets/envelope-android.png',
                'desc' => 'Tes B'
            ],
            2 => [
                'name' => 'Bundling C',
                'image_url' => '/assets/formbgandro.png',
                'desc' => 'Tes C'
            ],
        ];

        $this->mostSelectedBundle = $bundles[$mostSelectedAnswer];

        return Inertia::render('QuizMerchAfter', [
            'mostSelectedBundle' => $this->mostSelectedBundle,
        ],
        );
    }
}
