alert("Primero ingresá el rango de números que vamos a usar");
alert("OJO: Recordá que el rango debe tener una diferencia mínima de 5 números (por ej: desde 5 hasta 10)");

var rangoDesde = Number( prompt("Ingresá desde qué número") );
var rangoHasta = Number( prompt("Ingresá hasta qué número") );

while( (rangoHasta - rangoDesde) < 5 ){
	alert("¿Qué dijimos? El rango debe tener una diferencia mínima de 5 números");

	rangoDesde = Number( prompt("Ingresá desde qué número") );
	rangoHasta = Number( prompt("Ingresá hasta qué número") );
}

var numero = 0;
var terminar = false;

do {
	numero = Number( prompt( "Muy Bien! Ahora ingresá un número, que esté entre " + rangoDesde + " hasta " + rangoHasta ) );

	alerta = rangoParImpar( numero, rangoDesde, rangoHasta );
	alert( alerta );

	eleccionCorrecta = false;
	do{
		quiereContinuar = parseInt( prompt("¿Querés ingresar otro número?: Escribí 1 para continuar o 2 para terminar"));

		switch(quiereContinuar){
			case 1:
				eleccionCorrecta = true;
				break;
			case 2:
				eleccionCorrecta = true;
				terminar = true;
				break;
			default:
				alert( "No entendí tu respuesta, volvé a intentar. \nEscribí 1 para continuar o 2 para terminar" );
				break;
		}

	} while( eleccionCorrecta == false );
	

} while ( terminar == false );

alert( "Apu dice: Gracias vuelva prontos! ");

function rangoParImpar( numero, rangoDesde, rangoHasta ){

	if( (numero >= rangoDesde) && (numero <= rangoHasta) ){
		if( numero % 2 == 0 ){
			return "Muy Bien! El número ingresado está dentro del rango y es un número PAR";
		}else{
			return "Bien! El número ingresado está dentro del rango";
		}
	}else{
		if( numero % 2 != 0 ){
			return "Ups! El número ingresado está fuera del rango. Es un número IMPAR";
		}else{
			return "El número ingresado está fuera del rango";
		}
	}
}