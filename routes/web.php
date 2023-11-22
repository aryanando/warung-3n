<?php

use App\Http\Controllers\ItemController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/item', [ItemController::class, 'show']);

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () { return view('dashboard'); })->name('dashboard');
    Route::get('/item/add', [ItemController::class, 'create'])->name('item/add');
    Route::get('/item/update/{id}', [ItemController::class, 'edit'])->name('item/update');
    Route::post('/item/update/{id}', [ItemController::class, 'update']);
    Route::delete('/item/delete/{id}', [ItemController::class, 'destroy']);
    Route::post('/item/insert', [ItemController::class, 'store']);
});
