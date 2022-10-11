var numero = parseInt( prompt( "Ingresá un número:") );

if( numero == 0 ){
	alert( "Ingresaste el número 0 (cero)");
}else if( numero % 2 == 0 ){
	alert( "El número que ingresaste es PAR");
}else{
	alert( "El número que ingresaste es IMPAR");
}