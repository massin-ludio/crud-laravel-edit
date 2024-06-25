<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProfilesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('Welcome'),
        'canRegister' => Route::has('Welcome'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('profiles.index');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');  
    Route::get('/dashboard', [ProfilesController::class, 'index'])->name('profiles.index');
    Route::get('/profiles/{id}/edit', [ProfilesController::class, 'edit'])->name('profiles.edit');
    Route::patch('/profiles/{id}', [ProfilesController::class, 'update'])->name('profiles.update');
    Route::put('/profiles/{id}', [ProfilesController::class, 'update'])->name('profiles.update');
    Route::delete('/profiles/{id}', [ProfilesController::class, 'destroy'])->name('profiles.destroy');

});

require __DIR__.'/auth.php';
