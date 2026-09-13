<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
});

Route::get('/sobre-o-projeto', function () {
    return Inertia::render('Sobre');
});

Route::get('/Cronograma', function () {
    return Inertia::render('Cronograma');
});

Route::get('/Documentacao', function () {
    return Inertia::render('Documentacao');
});

Route::get('/Telas', function () {
    return Inertia::render('Telas');
});

Route::get('/Relatorio', function () {
    return Inertia::render('Relatorio');
});