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


