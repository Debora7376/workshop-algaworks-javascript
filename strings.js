// Funcoes de uma String
var s = "The winter is coming, It's really coming!";
console.log("Quantidade: " + s.length); // Tamanho da String
console.log("Primeira vez que a palavra 'coming' aparece: " + s.indexOf("coming"));
console.log("Ultima vez qua a palavra 'coming' aparece: " + s.lastIndexOf("coming"));
console.log("Pegar um trecho de texto passando a posição: " + s.slice(4,10)); // do caracter 4 ao 10
console.log("Pegar um trecho de texto passando a posição: " + s.slice(4,-8)); // do caracter 4 ao -8 (valor negativo sever para pegar de traz pra frente)
console.log("Pegar um trecho de texto passando uma posição e mais quantos caracteres" + s.substr(4,13)); // do caracter 4 e mais 13 caracter a frente
console.log("Substituir uma palavra: " + s.replace("winter", "summer"));
console.log("Texto em caixa alta: " + s.toUpperCase());
console.log("Texto em caixa baixa: " + s.toLowerCase());
console.log("Juntar dois textos: " + s.concat("!"));

var s = "Ned, Jon, Robb, Sansa, Bran, Arya, Rickon";
console.log(s.split(", "));