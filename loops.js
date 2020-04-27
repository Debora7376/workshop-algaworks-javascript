// Loop são codigos que são executados repedidas vezes a partir de uma condição
// for, for in, while, do while 

// while vai ser executado de acordo com uma condição booleana
var x = 0;
/*
while (x > 1) {
	console.log('X é igual a ' + x);

	x = x + 1;
}
*/

// Do While executa o codigo e compara depois 
do {
	console.log("X é igual a " + x);
	x = x + 1;
} while (x > 1)


// for
for(var y = 0; y < 10; y = y + 1) {
	console.log(y);
}

var obj = {
	nome: "Jon",
	sobrenome: "snow"
};

for(var prop in obj) {
	console.log(obj[prop]);
}
