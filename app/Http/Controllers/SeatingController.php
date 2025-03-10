<?php

namespace App\Http\Controllers;

use App\Models\Seating;
use App\Models\Tiket;
use App\Http\Requests\StoreSeatingRequest;
use App\Http\Requests\UpdateSeatingRequest;

class SeatingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.seating',[
            'title' => 'Seating',
            'tikets' => Tiket::where('status','=',3)->where('seat','=',0)->get(),
            'tiketsToCheck' => Tiket::where('status','=',3)->get(),
        ]);
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
    public function store(StoreSeatingRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Seating $seating)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Seating $seating)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSeatingRequest $request, Seating $seating)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Seating $seating)
    {
        //
    }
}
