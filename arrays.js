var array = "Ned Jon Robb Bran Rickon".split(" ");

// Transformando um array em string 
console.log(array.toString());
console.log(array.join(" | "));

// Adicionando um elemento novo no array
array.push("Sansa"); // Adiciona no final
array.unshift("Sansa"); // Adiciona no inicio

var elementoRemovido = array.pop(); // Remove o ultimo item do array
console.log("Ultimo item removido: "  + array);

var elementoRemovido = array.shift(); // Remove o ultimo item do array
console.log("Primeiro Item Removido: " + array);

array[1] = "Jon Snow";

console.log(array);

var slice = array.slice(3,5); // retira alguns elementos. slice nao alterar o array original, ele retorna um novo
console.log(slice);

var splice = array.splice(1,1,"Arya", "Sansa"); // altera o array original
console.log(splice);

array.splice(3,1); // Remove o terceiro elemento do array
console.log(array);

array = array.concat(splice, slice);
console.log(array);