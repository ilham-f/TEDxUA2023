<?php

namespace App\Http\Controllers;

use App\Models\preevent_question;
use App\Http\Requests\Storepreevent_questionRequest;
use App\Http\Requests\Updatepreevent_questionRequest;
use Inertia\Inertia;

class PreeventQuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function showQuestion($questionNumber)
{
    $question = preevent_question::find($questionNumber);
    if (!$question) {
        return response()->json(['error' => 'Nomor pertanyaan tidak valid'], 400);
    }
    dd($question);

    return Inertia::render('Preevent1', [
        'question' => $question,
    ]);
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
