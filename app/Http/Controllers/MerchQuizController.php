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
                'name' => 'Eksplrist',
                'image1' => '/assets/explorist.png',
                'image2' => '/assets/bundle-product1.png',
                'desc' => '"You are a person that has done everything with the utmost sincerity and warmth. It doesn\'t only come from yourself but also comes from people around you, such as family, friends, or loved ones."'
            ],
            1 => [
                'name' => 'Heartiest',
                'image1' => '/assets/heartiest.png',
                'image2' => '/assets/bundle-product1.png',
                'desc' => '"You are a person that has done everything with the utmost sincerity and warmth. It doesn\'t only come from yourself but also comes from people around you, such as family, friends, or loved ones."'
            ],
            2 => [
                'name' => 'Lighter',
                'image1' => '/assets/lighter.png',
                'image2' => '/assets/bundle-product1.png',
                'desc' => '"You are a person that has done everything with the utmost sincerity and warmth. It doesn\'t only come from yourself but also comes from people around you, such as family, friends, or loved ones."'
            ],
        ];

        $this->mostSelectedBundle = $bundles[$mostSelectedAnswer];

        return Inertia::render(
            'QuizMerchAfter',
            [
                'mostSelectedBundle' => $this->mostSelectedBundle,
            ],
        );
    }
}
