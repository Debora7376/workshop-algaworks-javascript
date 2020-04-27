function dizerOi(nome) {
    console.log("Oi, " + nome + " Meu nome é " + this.nome);
}

// dizerOi("Arya");

// dizerOi.call(null, "Arya");

// dizerOi.apply(null, ["Arya"]);


class Pessoa {
    
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }

}

var pessoa = new Pessoa("Andre", "Souza");

dizerOi.call(pessoa, "Arya");