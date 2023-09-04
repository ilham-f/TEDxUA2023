<?php

namespace App\Http\Controllers;

use App\Models\preevent_question;
use App\Http\Requests\Storepreevent_questionRequest;
use App\Http\Requests\Updatepreevent_questionRequest;

class PreeventQuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function addQuestions()
    {
        $questions = [
            'Apa itu TedX',
            'Siapa pencetus Tedx',
            'Apa perbedaan Ted dan Tedx',
            'Tahun ini Tedx Uner yang ke berapa',
            'Apa saja divisi yang ada di TedxUner',
            'Bagaimana struktur organisasinya',
            'Siapa manager Webdev',
            'Siapa co-manager Webdev',
            'Webdev masuk ke PL berapa',
            'Webdev hoa hoe',
        ];

        preevent_question::addQuestions($questions);

        return response()->json(['message' => 'Success']);
    }
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Storepreevent_questionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(preevent_question $preevent_question)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(preevent_question $preevent_question)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Updatepreevent_questionRequest $request, preevent_question $preevent_question)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(preevent_question $preevent_question)
    {
        //
    }
}
