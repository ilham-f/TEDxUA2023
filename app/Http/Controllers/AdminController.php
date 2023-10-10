<?php

namespace App\Http\Controllers;

use App\Models\preevent_answer;
use App\Models\preevent_question;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.dashboard',[
            'title' => 'Pre-Event 1 | Dashboard'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function answerstable()
    {
        return view('admin.answers-table',[
            'answers' => preevent_answer::all(),
            'title' => 'Pre-Event 1 | Jawaban'
        ]);
    }

    public function questionstable()
    {
        return view('admin.questions-table',[
            'questions' => preevent_question::all(),
            'title' => 'Pre-Event 1 | Pertanyaan'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
