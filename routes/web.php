<?php

use App\Http\Controllers\TasksController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/tasksList/{q?}',[TasksController::class,'index']);
Route::post('/tasksList',[TasksController::class,'store']);
Route::get('/task/{id}',[TasksController::class,'edit']);
Route::patch('/task/{id}',[TasksController::class,'update']);
Route::delete('/task/{id}',[TasksController::class,'destroy']);
