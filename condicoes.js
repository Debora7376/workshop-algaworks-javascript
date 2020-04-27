// if (bool) { }


var x = 17; // Um sinal de = significa atribuição de valor 
var y;

// Dois Sinais de = significa comparação de valor
if (x > 18) {
	y = "maior";
}
else if (x == 18) {
	y = "igual";
}
else { // else Significa senão
	y = "menor";
}

// console.log(y);


switch(x) {
	case 18: 
		y = "dezoito";
		break;
	case 19:
		y = 'dezenove';
		break;
	default: 
		y = "Sei lá";
}

console.log(y);
