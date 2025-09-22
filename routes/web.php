<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/honey', function () {
    return Inertia::render('honey');
})->name('honey');

Route::get('/Avocado', function () {
    return Inertia::render('Avocado');
})->name('Avocado');

Route::get('/Accommodation', function () {
    return Inertia::render('Accommodation');
})->name('Accommodation');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
