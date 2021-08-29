<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DevfreelaController;

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

Route::get('/', [DevfreelaController::class, 'index'])->name('devfreelas.index');
Route::get('/devfreelas/create', [DevfreelaController::class, 'create'])->name('devfreelas.create');
Route::post('/devfreelas', [DevfreelaController::class, 'store'])->name('devfreelas.store');



