alert("Ahora vamos a hacer algunos cálculos... Ingresá 4 números en total");

var num1 = Number( prompt("Ingresá el primer número") );
var num2 = Number( prompt("Ingresá el segundo número") );
var num3 = Number( prompt("Ingresá el tercer número") );
var num4 = Number( prompt("Ingresá el cuarto número") );

var suma = num1 + num2 + num3 + num4;
var promedio = suma / 4;

alert("Genial! La suma de los cuatro números que ingresaste es: " + suma + " y el promedio es: " + promedio );