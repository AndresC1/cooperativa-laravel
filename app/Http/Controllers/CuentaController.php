<?php

namespace App\Http\Controllers;

use App\Models\Cuenta;
use App\Http\Requests\StoreCuentaRequest;
use App\Http\Requests\UpdateCuentaRequest;
use Inertia\Inertia;

class CuentaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Cuentas', [
            'Accounts' => Cuenta::where('user_id', auth()->user()->id)->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Account/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCuentaRequest $request)
    {
        $request->validated();
        $numeroCuenta = $request->tipo_cuenta == "Ahorro" ?'CA-':'CC';
        $cuenta = Cuenta::create([
            'nombre' => $request->nombre,
            'numero' => $numeroCuenta.rand(100000000, 999999999).'-1',
            'user_id' => auth()->user()->id,
            'saldo' => 0,
            'estado' => 1,
            'moneda' => $request->moneda,
            'tipo_cuenta' => $request->tipo_cuenta,
        ]);

        return redirect()->route('view_account', $cuenta->id);
    }

    /**
     * Display the specified resource.
     */
    public function show(Cuenta $cuenta)
    {
        return Inertia::render('Account/View', [
            'data' => $cuenta,
            'movimientos' => $cuenta->movimientos()->orderBy('created_at', 'desc')->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cuenta $cuenta)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCuentaRequest $request, Cuenta $cuenta)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cuenta $cuenta)
    {
        //
    }
}
