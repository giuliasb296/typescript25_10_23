export class BaseLivro {
    titulo: string;
    autor: string;
    ano: number;
    constructor(titulo: string, autor: string, ano: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
}