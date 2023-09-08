<?php

namespace App\Http\Controllers;

use App\Models\preevent_answer;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\Storepreevent_answerRequest;
use App\Http\Requests\Updatepreevent_answerRequest;

class PreeventAnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
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

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'preevent_question_id' => 'required',
            'answer' => 'required|string|max:255',
        ]);

        preevent_answer::create($validated);

        return redirect('pre-event-1/'.$request->preevent_question_id);
    }

    /**
     * Display the specified resource.
     */
    public function show(preevent_answer $preevent_answer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(preevent_answer $preevent_answer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Updatepreevent_answerRequest $request, preevent_answer $preevent_answer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(preevent_answer $preevent_answer)
    {
        //
    }
}
