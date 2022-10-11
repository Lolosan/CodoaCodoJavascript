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