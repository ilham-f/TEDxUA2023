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
            'title' => 'Dashboard'
        ]);
    }
    public function answer()
    {
        return view('admin.answers-table',[
            'title' => 'Pre-Event 1 | Jawaban',
            'answers' => preevent_answer::all()
        ]);
    }
    public function question()
    {
        return view('admin.questions-table',[
            'title' => 'Pre-Event 1 | Pertanyaan',
            'questions' => preevent_question::all()
        ]);
    }
    public function payments_create()
    {
        return view('payments.payments-create',[
            'title' => 'Main Event | Pembayaran',
            // 'questions' => preevent_question::all()
        ]);
    }
    // public function payments()
    // {
    //     return view('payments.payments-table',[
    //         'title' => 'Main Event | Pembayaran',
    //         // 'questions' => preevent_question::all()
    //     ]);
    // }

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
