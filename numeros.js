var x = 456e5; // 45600000
var y = 123e-6; // 0.000123

console.log(x);
console.log(y);

var z = 999999999999999; // Em valores inteiros aceita ate 15 digitos
console.log(z);
var z = 0.9999999999999999; // Em decimal suporta ate 16 digitos 
console.log(z);

var a = 0xFFF; // Podemos declarar numeros tambem em Hex

var b = 07777; // Podemos declarar numeros tambem em Oct

console.log("Mostrando o valor em Hex: " + a.toString(16) + " = " + a);
console.log("Mostrando o valor em OCT: " + b.toString(8) + " = " + b);

console.log("Converte o numero em Exponencial " + x.toExponential());

console.log("Arredonda o numero para duas casas decimais: " + (3.357).toFixed(2));

console.log("Arredonta contando todos os numeros (antes e depois do ponto): " + (3.357).toPrecision(2));