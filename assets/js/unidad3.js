function ejecutarU3E14(){
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
}
function ejecutarU3E15(){
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
}
function ejecutarU3E16(){
	
	alert("Bienvenido a la LOLO-Calc");

	let num1 = '';
	let num2 = '';
	let operador = '';
	let resultado = 0;
	let operadorcorrecto = false;
	let continuar = 0;

	do{

		do{
			num1 = Number( prompt("Ingresá un número"));
		} while( isNaN(num1))
		
		do{
			num2 = Number( prompt("Ingresá otro número"));
		} while( isNaN(num2))

		do{
			operador = prompt("Ahora ingresá el operador que querés usar: +, -, *, /" );

			switch(operador){
				case "+":
					resultado = num1 + num2;
					operadorcorrecto = true;
				break;
				case "-":
					resultado = num1 - num2;
					operadorcorrecto = true;
				break;
				case "*":
					resultado = num1 * num2;
					operadorcorrecto = true;
				break;
				case "/":
					resultado = num1 / num2;
					operadorcorrecto = true;
				break;
				default:
					operadorcorrecto = false;
					alert("Usaste un operador no permitido. Volvé a intentar");
				break;
			}

		} while ( operadorcorrecto == false )
		
		alert("El resultado de la operación es: " + resultado );


		
		let repreguntar = true;
		do{
			continuar = parseInt( prompt( '¿Querés hacer otro cálculo? Elegí la opción:\n1. Si\n2.No') );

			if( continuar != 1 && continuar != 2 )
			{
				alert( 'Tenés que escribir los números 1 o 2');
			}else{
				repreguntar = false;
			}

		}while ( repreguntar == true ) 

		if( continuar == 2 ){
			alert('Adios!!');
		}

	} while ( continuar == 1 ) 
	
}
function ejecutarU3E17()
{
	let aprobados = 0;
	let desaprobados = 0;
	let promedios = 0;
	let totalAlumnos = 0;
	let totalNotas = 0;

	let ingresarNota = document.getElementById('ingresarNota');
	let resetCuadros = document.getElementById('resetCuadros');

	pasarFocus();
	
	ingresarNota.addEventListener( 'submit', function(e)
	{
		e.preventDefault();
	
		let inputNota = document.getElementById('inputNota');
	
		let notaValida = validarNota( inputNota.value );
	
		if( notaValida !== false )
		{
			historial( notaValida );

			if( notaValida >= 4 )
			{
				aprobados++;
			}else
			{
				desaprobados++
			}

			totalAlumnos++;
			totalNotas = Number( totalNotas ) + Number( notaValida );

			promedios = calcularPromedio( totalNotas, totalAlumnos );

			actualizarCuadros( promedios, aprobados, desaprobados );
		}
	});

	resetCuadros.addEventListener( 'click', function(e)
	{
		e.preventDefault();

		let borrartodos = [
			document.getElementById('cuadroAprobados'),
			document.getElementById('cuadroDesaprobados'),
			document.getElementById('cuadroPromedios'),
			document.getElementById('cont_historial'),
			document.getElementById('inputNota'),
		]
	
		for( let borrar of borrartodos )
		{
			if( borrar.id == 'inputNota' )
			{
				borrar.value = 0;
			}else
			{
				borrar.innerText = '';
			}
			
		}

		aprobados = 0;
		desaprobados = 0;
		promedios = 0;
		totalAlumnos = 0;
		totalNotas = 0;

	});

	return;
}

function ejecutarU3E18(){

}
function ejecutarU3E19(){

}

/**
 * ------------------------------------------------------------------------------------------------
 * funciones satelite U3E17
 * ------------------------------------------------------------------------------------------------
**/

function pasarFocus()
{
	let modal = document.getElementById('modalU3E17');
	let ingresarNota = document.getElementById('ingresarNota');
	
	modal.addEventListener('shown.bs.modal', function () {
		ingresarNota.focus()
	})

	return;
}

function validarNota( nota )
{
	if( nota >= 1 && nota <= 10 )
	{
		return nota;
	}else
	{
		return false;
	}
}

function historial( nota )
{
	let contenedor = document.getElementById('cont_historial');
	
	if( contenedor.innerText.length < 1 )
	{
		contenedor.innerText = nota;
	}else
	{
		contenedor.innerText = nota + ', ' + contenedor.innerText;
	}
	
	return;
}

function calcularPromedio( totalNotas, totalAlumnos )
{
	let promedio = totalNotas / totalAlumnos;
	return promedio;
}

function actualizarCuadros( promedios, aprobados, desaprobados )
{
	let cuadroPromedios = document.getElementById('cuadroPromedios');
	let cuadroAprobados = document.getElementById('cuadroAprobados');
	let cuadroDesaprobados = document.getElementById('cuadroDesaprobados');

	if( promedios >= 4 )
	{
		cuadroPromedios.innerHTML = '<p class="text-success">' + promedios.toFixed(2) + '</p>';
	}else
	{
		cuadroPromedios.innerHTML = '<p class="text-danger">' + promedios.toFixed(2) + '</p>';
	}

	cuadroAprobados.innerText = aprobados;

	cuadroDesaprobados.innerText = desaprobados;

	return;
}

