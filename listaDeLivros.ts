import { LivroCategoria } from "./obj2";

const listaDeLivros : LivroCategoria[] = [
    new LivroCategoria('Até o verão terminar', 'Colleen Hoover', 2021, 'Romance'),
    new LivroCategoria('O Mundo de Sofia', 'Jostein Gaarder', 1991, 'Romance'),
];

listaDeLivros.forEach((livro) => {
    livro.exibirDetalhes();
    if (livro.antigo()) {
        console.log(`É antigo`)
    } else {
        console.log(`Não é antigo`)
    }
})