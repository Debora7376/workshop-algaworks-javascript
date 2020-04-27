function Stark(nome, idade, corDoCabelo) {
    this.nome = nome;
    this.idade = idade;
    this.corDoCabelo = corDoCabelo;

    this.sobrenome = "Stark";

    this.apresentar = function(){
        console.log("Olá, eu sou " + this.nome + " " + this.sobrenome + ".");
    }
}

var ned = new Stark("Ned", 40, "Preto");
Stark.prototype.darTchau = function() { console.log("Tchau") }; // Disponivel para qualquer prototipo do tipo Stark
// ned.darTchau = function() { console.log("Tchau") }; // Disponivel apenas para o ned
ned.apresentar();
ned.darTchau();

var sansa = new Stark("Sansa", 13, "Cobre");
sansa.apresentar();
sansa.darTchau();


// Podemos alterar o prototipo de uma classe tipo String e adicionar novas funçoes para ela 
String.prototype.apagar = function() {
    return "";
}

console.log("oi".apagar());