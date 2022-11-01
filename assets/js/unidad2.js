function ejecutarU2E7(){
	var numero = parseInt( prompt( "Ingresá un número:") );

	if( numero == 0 ){
		alert( "Ingresaste el número 0 (cero)");
	}else if( numero % 2 == 0 ){
		alert( "El número que ingresaste es PAR");
	}else{
		alert( "El número que ingresaste es IMPAR");
	}
}
function ejecutarU2E8(){
	var numero = parseInt( prompt( "Ingresá un número:") );

	if( numero % 3 == 0 ){
		alert( "El número que ingresaste ES múltiplo de 3");
	}else{
		alert( "El número que ingresaste NO ES múltiplo de 3");
	}
}
function ejecutarU2E9(){
	var letra = prompt( "Ingresá una letra minúscula");

	switch(letra){
		case "a":
		case "A":
		alert("Ingresaste una vocal");
		break;
		case "e":
		case "E":
			alert("Ingresaste una vocal");
		break;
		case "i":
		case "I":
			alert("Ingresaste una vocal");
		break;
		case "o":
		case "O":
			alert("Ingresaste una vocal");
		break;
		case "u":
		case "U":
			alert("Ingresaste una vocal");
		break;
		default:
			alert("NO ingresaste una vocal");
		break;
	}
}
function ejecutarU2E10(){
	alert("Primero ingresá el rango de números que vamos a usar");
	alert("OJO: Recordá que el rango debe tener una diferencia mínima de 5 números (por ej: desde 5 hasta 10)");
	
	var rangoDesde = Number( prompt("Ingresá desde qué número") );
	var rangoHasta = Number( prompt("Ingresá hasta qué número") );
	
	while( (rangoHasta - rangoDesde) < 5 ){
		alert("¿Qué dijimos? El rango debe tener una diferencia mínima de 5 números");
	
		rangoDesde = Number( prompt("Ingresá desde qué número") );
		rangoHasta = Number( prompt("Ingresá hasta qué número") );
	}
	
	var numero = Number( prompt( "Por último, ingresá un número, que esté entre " + rangoDesde + " hasta " + rangoHasta ) );
	
	if( (numero >= rangoDesde) && (numero <= rangoHasta) ){
		if( numero % 2 == 0 ){
			alert("Muy Bien! El número ingresado está dentro del rango y es un número PAR");
		}else{
			alert("Bien! El número ingresado está dentro del rango");
		}
	}else{
		if( numero % 2 != 0 ){
			alert("Ups! El número ingresado está fuera del rango. Es un número IMPAR");
		}else{
			alert("El número ingresado está fuera del rango");
		}
	}
}
function ejecutarU2E11(){
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
}
function ejecutarU2E12(){
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
}
function ejecutarU2E13(){
	var categoria = parseInt( prompt( "Ingresá a qué categoría pertenece"));
	var horasExtras = Number( prompt( "Ahora ingresá cuántas horas extras hizo"));
	
	var sueldo = 0;
	
	switch(categoria){
		case 1:
			sueldo = 2000;
			
			if( horasExtras >= 20 ){
				sueldo = sueldo + 500;
			}
		break;
	
		case 2:
			sueldo = 3000;
		break;
	
		case 3:
			sueldo = 4000;
	
			if( horasExtras >= 30 ){
				sueldo = sueldo + 1000;
			}
		break
		default:
			sueldo = 'error';
		break;
	}
	
	if(sueldo != 'error'){
		if( sueldo > 4000 ){
			alert("Muy Bien! El sueldo calculado del empleado superó los u$d 4000");
			alert("El sueldo fue de u$d " + sueldo);
		}else{
			alert("Quizá la próxima. El sueldo fue de u$d " + sueldo);
		}
	}else{
		alert("ERROR: No existe esa categoría. Refrescá la ventana para volver a empezar");
	}
}