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

	let modal = document.getElementById('modalU3E17');
	pasarFocus( modal, ingresarNota );
	
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

	let minimos = [];
	let minimo = 0;
	let maximos = [];
	let maximo = 0;
	let suma = 0;

	let ingresarNumero = document.getElementById('ingresarNumero');
	let resetCuadros = document.getElementById('resetCuadrosNumeros');

	let modal = document.getElementById('modalU3E18');
	pasarFocus( modal, ingresarNumero );
	
	ingresarNumero.addEventListener( 'submit', function(e)
	{
		e.preventDefault();
	
		let inputNumero = document.getElementById('inputNumero');
	
		let numeroValido = validarNumero( inputNumero.value );
	
		if( numeroValido !== false )
		{
			historialNumero( numeroValido );

			suma = suma + numeroValido;

			minimos.push( numeroValido );
			minimo = buscarMinimo( minimos );

			maximos.push( numeroValido );
			maximo = buscarMaximo( maximos );

			actualizarCuadrosNumeros( suma, minimo, maximo );
		}
	});

	resetCuadros.addEventListener( 'click', function(e)
	{
		e.preventDefault();

		let borrartodos = [
			document.getElementById('cuadroSuma'),
			document.getElementById('cuadroMenor'),
			document.getElementById('cuadroMayor'),
			document.getElementById('cont_num_historial'),
			document.getElementById('inputNumero'),
		]
	
		for( let borrar of borrartodos )
		{
			if( borrar.id == 'inputNumero' )
			{
				borrar.value = 0;
			}else
			{
				borrar.innerText = '';
			}
			
		}

		minimos = [];
		minimo = 0;
		maximos = [];
		maximo = 0;
		suma = 0;
	

	});

	return;

}
function ejecutarU3E19()
{
	let mujeres = 0;
	let hombres = 0;
	let mujeresMas25 = 0;
	let porcentajeMujeresMas25 = 0;
	let hombresMenos18 = 0;
	let porcentajeHombresMenos18 = 0;
	let sumaEdadMujeres = 0;
	let promedioEdadMujeres = 0;
	let sumaAlturaHombres = 0;
	let promedioAlturaHombres = 0;
	let menoresEdades = [];
	let menorEdad = 0;
	let mayoresAlturas = [];
	let mayorAltura = 0;

	let guardarPersona = document.getElementById('ingresarDatos');
	let resetCuadrosEncuesta = document.getElementById('resetCuadrosEncuesta');
		
	guardarPersona.addEventListener( 'submit', function(e)
	{
		//validador bootstrap
		if (!e.target.checkValidity())
		{
			e.preventDefault();
			e.stopPropagation();

			return;
		}
		//validador bootstrap
		e.target.classList.add('was-validated');

		let inputGenero = document.getElementById('inputGenero');
		let inputEdad = document.getElementById('inputEdad');
		let inputAltura = document.getElementById('inputAltura');

		//mujeres
		if( inputGenero.value == 'F' )
		{
			mujeres++;

			if( inputEdad.value >= 25 )
			{
				mujeresMas25++;
			}

			porcentajeMujeresMas25 = ( mujeresMas25 / mujeres ) * 100;

			sumaEdadMujeres = parseInt( sumaEdadMujeres ) + parseInt( inputEdad.value );
			promedioEdadMujeres = sumaEdadMujeres / mujeres;
		}

		if( inputGenero.value == 'M' )
		{
			hombres++;

			if( inputEdad.value <= 18 )
			{
				hombresMenos18++;
			}

			porcentajeHombresMenos18 = ( hombresMenos18 / hombres ) * 100;

			sumaAlturaHombres = parseInt( sumaAlturaHombres ) + parseInt( inputAltura.value );
			promedioAlturaHombres = sumaAlturaHombres / hombres;
		}

		menoresEdades.push( inputEdad.value );
		menorEdad = buscarMinimo( menoresEdades );

		mayoresAlturas.push( inputAltura.value );
		mayorAltura = buscarMaximo( mayoresAlturas );

		actualizarEstadisticas( porcentajeMujeresMas25, porcentajeHombresMenos18, promedioEdadMujeres, promedioAlturaHombres, menorEdad, mayorAltura );
	});

	resetCuadrosEncuesta.addEventListener( 'click', function(e)
	{
		e.preventDefault();

		let borrartodos = [
			document.getElementById('cuadroFMayor25'),
			document.getElementById('cuadroHMenor18'),
			document.getElementById('cuadroPromEdadF'),
			document.getElementById('cuadroPromAlturaM'),
			document.getElementById('cuadroMenorEdad'),
			document.getElementById('cuadroMayorEdad'),
			document.getElementById('inputGenero'),
			document.getElementById('inputEdad'),
			document.getElementById('inputAltura'),
		]
	
		for( let borrar of borrartodos )
		{
			if( borrar.id == 'inputEdad' || borrar.id == 'inputAltura' )
			{
				borrar.value = 0;
			}else
			{
				borrar.innerText = '';
			}
			
		}

		porcentajeMujeresMas25 = 0;
		porcentajeHombresMenos18 = 0;
		promedioEdadMujeres = 0;
		promedioAlturaHombres = 0;
		menoresEdades = [];
		menorEdad = 0;
		mayoresAlturas = [];
		mayorAltura = 0;
	});

	return;


}

/**
 * ------------------------------------------------------------------------------------------------
 * funciones satelite comunes
 * ------------------------------------------------------------------------------------------------
**/

function pasarFocus( modal, input )
{
	modal.addEventListener('shown.bs.modal', function () {
		input.focus()
	})

	return;
}

function buscarMinimo( array )
{
	let ordenado = ordenarArray( array );
	let minimo = ordenado[0];
	return minimo;
}

function buscarMaximo( array )
{
	let ordenado = ordenarArray( array );
	let maximo = ordenado[ ordenado.length - 1 ];

	return maximo;
}

function ordenarArray( array )
{

	//let ordenado = array.sort( function( a, b )
	array.sort( function( a, b )
	{
		if(a == b)
		{
			return 0; 
		}
		
		if(a < b) {
			return -1;
		}
		
		return 1;
	});

	//return ordenado;
	return array;
}


/**
 * ------------------------------------------------------------------------------------------------
 * funciones satelite U3E17
 * ------------------------------------------------------------------------------------------------
**/

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

/**
 * ------------------------------------------------------------------------------------------------
 * funciones satelite U3E18
 * ------------------------------------------------------------------------------------------------
**/

function validarNumero( numero )
{
	numero = Number( numero );

	if( isNaN( numero ) )
	{
		return false;
	}else
	{
		return numero;
	}
}

function historialNumero( numero )
{
	let contenedor = document.getElementById('cont_num_historial');
	
	if( contenedor.innerText.length < 1 )
	{
		contenedor.innerText = numero;
	}else
	{
		contenedor.innerText = numero + ', ' + contenedor.innerText;
	}
	
	return;
}

function actualizarCuadrosNumeros( suma, menor, mayor )
{
	let cuadroSuma = document.getElementById('cuadroSuma');
	let cuadroMayor = document.getElementById('cuadroMayor');
	let cuadroMenor = document.getElementById('cuadroMenor');

	cuadroSuma.innerHTML = suma.toFixed(2);

	cuadroMayor.innerText = mayor.toFixed(2);

	cuadroMenor.innerText = menor.toFixed(2);

	return;
}


/**
 * ------------------------------------------------------------------------------------------------
 * funciones satelite U3E19
 * ------------------------------------------------------------------------------------------------
**/

function actualizarEstadisticas( porcentajeMujeresMas25, porcentajeHombresMenos18, promedioEdadMujeres, promedioAlturaHombres, menorEdad, mayorAltura )
{
	let cuadroFMayor25 = document.getElementById('cuadroFMayor25');
	let cuadroHMenor18 = document.getElementById('cuadroHMenor18');
	let cuadroPromEdadF = document.getElementById('cuadroPromEdadF');
	let cuadroPromAlturaM = document.getElementById('cuadroPromAlturaM');
	let cuadroMenorEdad = document.getElementById('cuadroMenorEdad');
	let cuadroMayorEdad = document.getElementById('cuadroMayorEdad');

	cuadroFMayor25.innerText = porcentajeMujeresMas25.toFixed(2) + '%';
	cuadroHMenor18.innerText = porcentajeHombresMenos18.toFixed(2) + '%';
	cuadroPromEdadF.innerText = promedioEdadMujeres.toFixed(2);
	cuadroPromAlturaM.innerText = promedioAlturaHombres.toFixed(2) + 'cm';
	cuadroMenorEdad.innerText = menorEdad;
	cuadroMayorEdad.innerText = mayorAltura + 'cm';

	return;

}