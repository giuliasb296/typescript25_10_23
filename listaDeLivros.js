"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var obj2_1 = require("./obj2");
var listaDeLivros = [
    new obj2_1.LivroCategoria('Até o verão terminar', 'Colleen Hoover', 2021, 'Romance'),
    new obj2_1.LivroCategoria('O Mundo de Sofia', 'Jostein Gaarder', 1991, 'Romance'),
];
listaDeLivros.forEach(function (livro) {
    livro.exibirDetalhes();
    if (livro.antigo()) {
        console.log("\u00C9 antigo");
    }
    else {
        console.log("N\u00E3o \u00E9 antigo");
    }
});
