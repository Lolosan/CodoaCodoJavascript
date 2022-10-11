alert("Primero ingresá el rango de números que vamos a usar");
alert("OJO: Recordá que el rango debe tener una diferencia mínima de 5 números enteros (por ej: desde 5 hasta 10)");

var rangoDesde = parseInt( prompt("Ingresá desde qué número") );
var rangoHasta = parseInt( prompt("Ingresá hasta qué número") );

if( (rangoHasta - rangoDesde) < 5 ){
	alert("¿Qué dijimos? El rango debe tener una diferencia mínima de 5 números enteros");
	alert("Refrescá la página para empezar de nuevo");
}else{
	var numero = Number( prompt( "Por último, ingresá un número" ) );

	if( (numero > rangoDesde) && (numero < rangoHasta) ){

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


