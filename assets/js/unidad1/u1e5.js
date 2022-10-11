var valorHora = Number( prompt( "Ingresá el valor de la hora de trabajo:") );

var horasTrabajadas = Number( prompt( "Ahora ingresá la cantidad de horas que trabajó el empleado en el mes" ) );

var antiguedad = parseInt( prompt("Por último, ingresá los años de antigüedad que tiene en nuestra empresa") );

var sueldoBruto = valorHora * horasTrabajadas;

var bonoAntiguedad = ( sueldoBruto * 0.15 ) * antiguedad;

var sueldoNeto = sueldoBruto + bonoAntiguedad;

alert( "El sueldo que debemos pagarle al empleado es de $" + sueldoNeto );