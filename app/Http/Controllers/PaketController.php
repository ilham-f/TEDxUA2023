<?php

namespace App\Http\Controllers;

use App\Models\Paket;
use Illuminate\Http\Request;

class PaketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pakets = Paket::all();
        return view('admin.paket.data-paket',compact('pakets'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.paket.create-paket');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $paket = new Paket();
        $paket->nama_paket = $request->input('nama_paket');
        $paket->detail_paket = $request->input('detail_paket');
        $paket->harga = $request->input('harga');
        $paket->save();
    
        return redirect()->route('packets-index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Paket $paket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */

     public function find($id)
     {
         return Paket::where('id', $id)->first();
     
     }
    public function edit($id)
    {
        $paket = PaketController::find($id);

        return view('admin.paket.edit-paket', compact('paket'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $paket = Paket::find($id);
    
    $paket->nama_paket = $request->input('nama_paket');
    $paket->detail_paket = $request->input('detail_paket');
    $paket->harga = $request->input('harga');
    
    $paket->save();
    
    return redirect()->route('packets-index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Paket $paket)
    {
        //
    }
}
