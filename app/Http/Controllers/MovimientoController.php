<?php

namespace App\Http\Controllers;

use App\Http\Requests\Transaction\DepositoRequest;
use App\Http\Requests\Transaction\TransaccionRequest;
use App\Models\Cuenta;
use App\Models\Movimiento;
use App\Http\Requests\StoreMovimientoRequest;
use App\Http\Requests\UpdateMovimientoRequest;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class MovimientoController extends Controller
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

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMovimientoRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Movimiento $movimiento)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movimiento $movimiento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMovimientoRequest $request, Movimiento $movimiento)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movimiento $movimiento)
    {
        //
    }

    public function deposito()
    {
        return Inertia::render('Transactions/Deposito');
    }

    public function retiro()
    {
        return Inertia::render('Transactions/Retiro');
    }

    public function transferencia()
    {
        return Inertia::render('Transactions/Transaccion',
            [
                'cuentas' => Cuenta::where('user_id', auth()->user()->id)->get(),
            ]);
    }

    public function store_deposito(DepositoRequest $request){
        try {
            $request->validated();
            DB::beginTransaction();
            $cuenta = Cuenta::where('numero', $request->cuenta)->first();
            if($request->moneda == 'USD' && $cuenta->moneda == 'NIO'){
                $request->monto = $request->monto * 36.52;
            }elseif($request->moneda == 'NIO' && $cuenta->moneda == 'USD'){
                $request->monto = $request->monto / 36.52;
            }
            $movimiento = Movimiento::create([
                'cuenta_id' => $cuenta->id,
                'fecha' => now('America/Managua')->format('Y-m-d'),
                'tipo_movimiento' => 'Deposito',
                'descripcion' => $request->descripcion,
                'monto' => $request->monto,
                'saldo' => $cuenta->saldo + $request->monto,
                'moneda' => $request->moneda,
                'numero_referencia' => 'REF-'.rand(100000000, 999999999).'-1',
            ]);
            $cuenta->saldo = $cuenta->saldo + $request->monto;
            $cuenta->save();
            DB::commit();
            return redirect()->route('view_account', $movimiento->cuenta_id);
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->with('error', 'Ocurrio un error al realizar el deposito');
        }
    }
    public function store_retiro(DepositoRequest $request){
        try {
            $request->validated();
            DB::beginTransaction();
            $cuenta = Cuenta::where('numero', $request->cuenta)->first();
            if($request->moneda == 'USD' && $cuenta->moneda == 'NIO'){
                $request->monto = $request->monto * 36.52;
            }elseif($request->moneda == 'NIO' && $cuenta->moneda == 'USD'){
                $request->monto = $request->monto / 36.52;
            }
            if ($cuenta->saldo < $request->monto) {
                return redirect()->back()->with('error', 'No tiene saldo suficiente para realizar el retiro');
            }
            $movimiento = Movimiento::create([
                'cuenta_id' => $cuenta->id,
                'fecha' => now('America/Managua')->format('Y-m-d'),
                'tipo_movimiento' => 'Retiro',
                'descripcion' => $request->descripcion,
                'monto' => $request->monto,
                'saldo' => $cuenta->saldo - $request->monto,
                'moneda' => $request->moneda,
                'numero_referencia' => 'REF-'.rand(100000000, 999999999).'-2',
            ]);
            $cuenta->saldo = $cuenta->saldo - $request->monto;
            $cuenta->save();
            DB::commit();
            return redirect()->route('view_account', $movimiento->cuenta_id);
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->with('error', 'Ocurrio un error al realizar el deposito');
        }
    }

    public function store_transaccion(TransaccionRequest $request){
        try {
            $request->validated();
            DB::beginTransaction();
            $cuenta_origen = Cuenta::where('numero', $request->cuenta_origen)->first();
            $cuenta_destino = Cuenta::where('numero', $request->cuenta_destino)->first();
            $monto_destino = $request->monto;
            $monto_origen = $request->monto;
            if($cuenta_origen->saldo < $request->monto){
                return redirect()->back()->with('error', 'No tiene saldo suficiente para realizar el retiro');
            }
            if($request->moneda == 'USD' && $cuenta_origen->moneda == 'NIO'){
                $monto_origen = $request->monto * 36.52;
            }elseif($request->moneda == 'NIO' && $cuenta_origen->moneda == 'USD'){
                $monto_origen = $request->monto / 36.52;
            }
            if($request->moneda == 'USD' && $cuenta_destino->moneda == 'NIO'){
                $monto_destino = $request->monto * 36.52;
            }elseif($request->moneda == 'NIO' && $cuenta_destino->moneda == 'USD'){
                $monto_destino = $request->monto / 36.52;
            }
            $movimiento1 = Movimiento::create([
                'cuenta_id' => $cuenta_origen->id,
                'fecha' => now('America/Managua')->format('Y-m-d'),
                'tipo_movimiento' => 'Retiro',
                'descripcion' => $request->descripcion,
                'monto' => $monto_origen,
                'saldo' => $cuenta_origen->saldo - $monto_origen,
                'moneda' => $request->moneda,
                'numero_referencia' => 'REF-'.rand(100000000, 999999999).'-2',
            ]);
            $movimiento2 = Movimiento::create([
                'cuenta_id' => $cuenta_destino->id,
                'fecha' => now('America/Managua')->format('Y-m-d'),
                'tipo_movimiento' => 'Deposito',
                'descripcion' => $request->descripcion,
                'monto' => $monto_destino,
                'saldo' => $cuenta_destino->saldo - $monto_destino,
                'moneda' => $request->moneda,
                'numero_referencia' => 'REF-'.rand(100000000, 999999999).'-1',
            ]);
            $cuenta_origen->saldo = $cuenta_origen->saldo - $monto_origen;
            $cuenta_origen->save();
            $cuenta_destino->saldo = $cuenta_destino->saldo + $monto_destino;
            $cuenta_destino->save();
            DB::commit();
            return redirect()->route('cuentas');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->with('error', 'Ocurrio un error al realizar el deposito'. $e->getMessage());
        }
    }
}
