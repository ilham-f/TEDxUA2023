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
        return view('admin.packet',compact('pakets'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nama_paket' => 'required',
            'detail_paket' => 'required',
            'kuota' => 'required|numeric',
            'harga' => 'required|numeric',
            'image' => 'image|mimes:jpeg,png,jpg,gif',
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
            $validatedData['image'] = $imagePath;
        }

        Paket::create($validatedData);

        return redirect()->route('packets-index')->with('success', 'Paket added successfully');
    }


    /**
     * Display the specified resource.
     */
    public function show(Paket $paket)
    {
        //
    }

    public function edit($id)
    {
        $paket = $this->find($id);
        return view('packets.edit', compact('paket'));
    }

    public function update(Request $request, $id)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'nama_paket' => 'required|string',
            'detail_paket' => 'required',
            'kuota' => 'required|numeric',
            'harga' => 'required|numeric',
            'image' => 'image|mimes:jpeg,png,jpg,gif', // You can adjust image validation rules
        ]);

        // Find the Paket model by ID
        $paket = Paket::findOrFail($id);

        // Update the attributes of the Paket using the validated data
        $paket->nama_paket = $validatedData['nama_paket'];
        $paket->detail_paket = $validatedData['detail_paket'];
        $paket->kuota = $validatedData['kuota'];
        $paket->harga = $validatedData['harga'];

        // Handle image upload if a new image is provided
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public'); // Adjust the storage path as needed
            $paket->image = $imagePath;
        }

        // Save the changes to the database
        $paket->save();

        return redirect()->route('packets-index')->with('success', 'Paket updated successfully');
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Paket $paket)
    {
        //
    }
}
