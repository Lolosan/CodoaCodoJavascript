function ejecutarU1E1(){
	let nombre = '';
	let apellido = '';

	do {
		nombre = prompt("Hola! Ingresá tu nombre acá");

	} while ( nombre.length < 1 );
	
	do{
		apellido = prompt("Genial! Ahora ingresá tu apellido");
	} while( apellido.length < 1 )
	

	alert("Bienvenido " + nombre + " " + apellido + "!!!");
}

function ejecutarU1E2(){
	var diametro = Number( prompt("Ingresá acá el diámetro de un círculo:") );

	const pi = 3.1416;

	//Perímetro
	var perimetro = pi * diametro;

	//Área
	//Se puede evitar pasar a radio, pero estamos jugando
	var radio = diametro / 2;
	var area = pi * radio * radio;

	alert("Según el diámetro que ingresaste, el perímetro del círculo es: " + perimetro + " cm y su área es: " + area + " cm2");
}

function ejecutarU1E3(){
	alert("Ahora vamos a hacer algunos cálculos... Ingresá 4 números en total");

	var num1 = Number( prompt("Ingresá el primer número") );
	var num2 = Number( prompt("Ingresá el segundo número") );
	var num3 = Number( prompt("Ingresá el tercer número") );
	var num4 = Number( prompt("Ingresá el cuarto número") );
	
	var suma = num1 + num2 + num3 + num4;
	var promedio = suma / 4;
	
	alert("Genial! La suma de los cuatro números que ingresaste es: " + suma + " y el promedio es: " + promedio );
}

function ejecutarU1E4(){
	var valorHora = Number( prompt( "Ingresar el valor de la hora de trabajo:") );
	var horasTrabajadas = Number( prompt( "Ahora ingresá la cantidad de horas que trabajó el empleado en el mes" ) );
	
	var sueldo = valorHora * horasTrabajadas;
	
	alert( "El sueldo que debemos pagarle al empleado es de $" + sueldo );
}

function ejecutarU1E5(){
	var valorHora = Number( prompt( "Ingresá el valor de la hora de trabajo:") );

	var horasTrabajadas = Number( prompt( "Ahora ingresá la cantidad de horas que trabajó el empleado en el mes" ) );

	var antiguedad = parseInt( prompt("Por último, ingresá los años de antigüedad que tiene en nuestra empresa") );

	var sueldoBruto = valorHora * horasTrabajadas;

	var bonoAntiguedad = ( sueldoBruto * 0.15 ) * antiguedad;

	var sueldoNeto = sueldoBruto + bonoAntiguedad;

	alert( "El sueldo que debemos pagarle al empleado es de $" + sueldoNeto );
}

function ejecutarU1E6(){
	var valorHora = Number( prompt( "Primero ingresá el valor de la hora de trabajo:") );
	var horasTrabajadas = Number( prompt( "Luego ingresá la cantidad de horas que trabajó el empleado en el mes" ) );
	var antiguedad = parseInt( prompt("Ahora, ingresá los años de antigüedad que tiene en nuestra empresa") );
	var segurosVendidos = parseInt( prompt("¿Cuántos seguros vendió en el mes?") );
	var seguroMasCaro = Number( prompt( "Por último, ingresá el valor del seguro más caro que haya vendido" ) );
	
	
	var sueldoBruto = valorHora * horasTrabajadas;
	
	var bonoSeguroMasCaro = seguroMasCaro * 0.5;
	
	var bonoSegurosVendidos = ( sueldoBruto * 0.25 ) * segurosVendidos;
	
	var bonoAntiguedad = ( sueldoBruto * 0.15 ) * antiguedad;
	
	var sueldoNeto = sueldoBruto + bonoSeguroMasCaro + bonoSegurosVendidos + bonoAntiguedad;
	
	var valorHoraPromedio = sueldoNeto / horasTrabajadas;
	
	alert( "El sueldo que debemos pagarle al empleado es de $" + sueldoNeto + " y su valor de hora promedio, es de $" + valorHoraPromedio);
}