<?php

namespace App\Http\Controllers;

use App\Models\Tiket;
use Inertia\Controller;
use Illuminate\Http\Requests;
use App\Http\Requests\StoreTiketRequest;
use App\Http\Requests\UpdateTiketRequest;

class TiketController extends Controller
{
    /**
     * Display a listing of the resource.
     */

      public function index()
        {
            $tikets = Tiket::select('tikets.*', 'users.id as user_id', 'pakets.id as paket_id')
            ->leftJoin('users', 'tikets.id_user', '=', 'users.id')
            ->leftJoin('pakets', 'tikets.id_paket', '=', 'pakets.id')
            ->get();

        return view('admin.tiket', compact('tikets'));
            }


    // public function __construct()
    // {
    //     $this->Tiket = new Tiket();
    // }
    // public function index()
    // {
    //     $data = [
    //         'tiket' => $this->Tiket->alldata(),
    //     ];
    //     return view('admin.tiket', $data);
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
    public function store(StoreTiketRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Tiket $tiket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tiket $tiket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTiketRequest $request, Tiket $tiket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tiket $tiket)
    {
        //
    }
}
