var lado1 = Number( prompt("Ingresá el primer lado") );
var lado2 = Number( prompt("Ingresá el segundo lado") );
var lado3 = Number( prompt("Ingresá el tercer lado") );

if( (lado1 == lado2) && (lado1 == lado3) && (lado2 == lado3) ){
	alert("El triángulo ingresado es de tipo: Equilátero");
}else if( (lado1 != lado2) && (lado1 != lado3) && (lado2 != lado3) ){
	alert("El triángulo ingresado es de tipo: Escaleno");
}else{
	alert("El triángulo ingresado es de tipo: Isósceles");
}