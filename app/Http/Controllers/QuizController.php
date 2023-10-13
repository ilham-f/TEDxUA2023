<?php

namespace App\Http\Controllers;

use App\Models\preevent_question;
use App\Http\Requests\Storepreevent_questionRequest;
use App\Http\Requests\Updatepreevent_questionRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function quiz(Request $request)
    {
        $answers = $request->answer; // Mendapatkan jawaban dari request

        // Inisialisasi hitungan untuk masing-masing pilihan jawaban
        $counts = ['A' => 0, 'B' => 0, 'C' => 0];

        // Menghitung jumlah kemunculan setiap pilihan jawaban
        foreach ($answers as $answer) {
            $counts[$answer]++;
        }

        // Menentukan jawaban yang paling sering muncul
        $result = array_keys($counts, max($counts));
        $result = $result[0];

        // $result sekarang berisi jawaban yang paling sering muncul (misalnya 'A', 'B', atau 'C')
        // Anda dapat menggunakannya sesuai kebutuhan, misalnya menyimpannya ke database atau meresponsnya ke front-end.



        // Contoh respons ke front-end
        // return response()->json(['result' => $result[0]]);
        return view('hasilkuis', compact('result'));
    }


    public function index()
    {
        return view('teskuis');
    }

    public function hasil()
    {
        return view('hasilkuis');
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
