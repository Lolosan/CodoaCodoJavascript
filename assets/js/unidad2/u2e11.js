alert("Bienvenido a la LOLO-Calc");

var num1 = Number( prompt("Ingresá un número"));
var num2 = Number( prompt("Ingresá otro número"));
var operador = prompt("Ahora ingresá el operador que querés usar: +, -, *, /" );

var resultado = 0;

switch(operador){
	case "+":
		resultado = num1 + num2;
	break;
	case "-":
		resultado = num1 - num2;
	break;
	case "*":
		resultado = num1 * num2;
	break;
	case "/":
		resultado = num1 / num2;
	break;

	default:
		resultado = 'error';
	break;
}

if( resultado != 'error' ){
	alert("El resultado de la operación es: " + resultado );
}else{
	alert("Usaste un operador no permitido. Refrescá la página y volvé a intentar");
}