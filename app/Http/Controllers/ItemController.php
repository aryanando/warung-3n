<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Carbon\Carbon;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Client\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ItemController extends Controller
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
        return view('admin.add-item');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated = $request->validate([
            'name' => 'required|max:255',
            'base_price' => 'required',
            'sell_price' => 'required',
            'unit' => 'required|min:2',
        ]);

        if (Item::create($validated)) {
            return redirect(url('/dashboard'))->with(['status' => 'success', 'message' => 'Data Berhasil Ditambah']);
        }else{
            return redirect(url('/item/add'))->with(['status' => 'danger', 'message' => 'Data Gagal Ditambah']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $result = DB::table('items')->where('name', 'like', '%' . $request->get('name') . '%')->where('deleted_at', '=', NULL)->get();
        return Response()->json(['data' => $result]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Item $item, $id)
    {
        $data['item'] = Item::find($id);
        return view('admin.update-item', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Item $item, $id)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'base_price' => 'required',
            'sell_price' => 'required',
            'unit' => 'required',
        ]);

        if (Item::where('id',$id)->update($validated)) {
            return redirect(url('/dashboard'))->with(['status' => 'success', 'message' => 'Data Berhasil Diubah']);
        }else{
            return redirect(url('/item/update/'.$id))->with(['status' => 'danger', 'message' => 'Data Gagal Diubah']);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $item, $id)
    {
        $willDeleted = Item::find($id);
        $willDeleted->delete();
    }
}
