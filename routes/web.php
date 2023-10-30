<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/usuarios', function () {
    return Inertia::render('Usuarios');
})->middleware(['auth', 'verified'])->name('usuarios');

Route::get('/socios', function () {
    return Inertia::render('Socios');
})->middleware(['auth', 'verified'])->name('socios');

Route::get('/transacciones', function () {
    return Inertia::render('Transacciones');
})->middleware(['auth', 'verified'])->name('transacciones');

Route::prefix('account')->group(function (){
   Route::get('/list', [\App\Http\Controllers\CuentaController::class, 'index'])->name('cuentas');
   Route::get('/view/{cuenta}', [\App\Http\Controllers\CuentaController::class, 'show'])->name('view_account');
   Route::get('/create', [\App\Http\Controllers\CuentaController::class, 'create'])->name('create_account');
   Route::post('/store', [\App\Http\Controllers\CuentaController::class, 'store'])->name('store_account');
})->middleware(['auth', 'verified']);

Route::prefix('transacciones')->group(function (){
    Route::get('/deposito', [\App\Http\Controllers\MovimientoController::class, 'deposito'])->name('deposito');
    Route::post('/deposito', [\App\Http\Controllers\MovimientoController::class, 'store_deposito'])->name('store_deposito');
    Route::get('/retiro', [\App\Http\Controllers\MovimientoController::class, 'retiro'])->name('retiro');
    Route::post('/retiro', [\App\Http\Controllers\MovimientoController::class, 'store_retiro'])->name('store_retiro');
    Route::get('/transferencia', [\App\Http\Controllers\MovimientoController::class, 'transferencia'])->name('transferencia');
    Route::post('/transferencia', [\App\Http\Controllers\MovimientoController::class, 'store_transaccion'])->name('store_transferencia');
})->middleware(['auth', 'verified']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
