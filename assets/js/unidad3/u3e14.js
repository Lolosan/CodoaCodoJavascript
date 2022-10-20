alert( "Te voy a pedir que ingreses tres números:");

var num1 = Number( prompt( "Ingresá el primer número" ) );
var num2 = Number( prompt( "Ingresá el segundo número" ) );
var num3 = Number( prompt( "Ingresá el tercer número" ) );

var numeros = [ num1, num2, num3 ];

for(var i = 0; i <= (numeros.length - 1) ; i++ ){

	var multiplo3 = numeros[i] % 3 == 0;
	var multiplo5 = numeros[i] % 5 == 0;
	var multiploAmbos = (multiplo3 == true) && (multiplo5 == true);
	var multiploNinguno = (multiplo3 == false) && (multiplo5 == false);

	var convertirI = "";

	switch( i ){
		case 0:
			convertirI = "primer";
			break;
		case 1:
			convertirI = "segundo";
			break;
		case 2:
			convertirI = "tercer";
			break;
		default:
			convertirI = "";
			break;
	}

	var alerta = "El " + convertirI + " número que ingresaste fue el " + numeros[i] + "\n";
	
	if( multiploAmbos == true ){
		alerta += "Este número es múltiplo de 3 y también es múltiplo de 5";
	}

	if( multiploNinguno == true ){
		alerta += "Este número no es múltiplo de 3 ni lo es de 5";
	}

	if( multiplo3 == true && multiplo5 == false ){ 
		alerta += "Este número es múltiplo de 3, pero no lo es de 5";
	}

	if( multiplo5 == true && multiplo3 == false ){
		alerta += "Este número es múltiplo de 5, pero no lo es de 3";
	}
	
	alert( alerta );
	
}