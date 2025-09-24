<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/About', function () {
    return Inertia::render('About');
})->name('About');

Route::get('/Avocado', function () {
    return Inertia::render('Avocado');
})->name('Avocado');

Route::get('/Accommodation', function () {
    return Inertia::render('Accommodation');
})->name('Accommodation');

Route::get('/HoneyProducts', function () {
    return Inertia::render('HoneyProducts');
})->name('HoneyProducts');

Route::get('/Conference', function () {
    return Inertia::render('Conference');
})->name('Conference');

Route::get('/Farm_Tours', function () {
    return Inertia::render('Farm_Tours');
})->name('Farm_Tours');


Route::get('/Poultry', function () {
    return Inertia::render('Poultry');
})->name('Poultry');

Route::get('/Moringa', function () {
    return Inertia::render('Moringa');
})->name('Moringa');

Route::get('/Contact_Us', function () {
    return Inertia::render('Contact_Us');})->name('Contact_Us');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
