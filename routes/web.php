<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Rota Principal do Portfólio UniFil (Contendo os 7 itens obrigatórios)
Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

// Redirecionamentos de conveniência para as âncoras oficiais do edital
Route::get('/sobre-o-projeto', function () {
    return redirect('/#2-sobre-o-projeto');
});

Route::get('/Cronograma', function () {
    return redirect('/#3-casos-e-cronograma');
});

Route::get('/Documentacao', function () {
    return redirect('/#4-documentacao');
});

Route::get('/Telas', function () {
    return redirect('/#5-telas-e-video');
});

Route::get('/Relatorio', function () {
    return redirect('/#6-relatorio-estagio');
});

Route::get('/Identificacao', function () {
    return redirect('/#7-identificacao-aluno');
});