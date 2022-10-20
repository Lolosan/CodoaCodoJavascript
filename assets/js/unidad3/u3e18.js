var categoria = parseInt( prompt( "Ingresá a qué categoría pertenece"));
var horasExtras = Number( prompt( "Ahora ingresá cuántas horas extras hizo"));

var sueldo = 0;

switch(categoria){
	case 1:
		sueldo = 2000;
		
		if( horasExtras >= 20 ){
			sueldo = sueldo + 500;
		}
	break;

	case 2:
		sueldo = 3000;
	break;

	case 3:
		sueldo = 4000;

		if( horasExtras >= 30 ){
			sueldo = sueldo + 1000;
		}
	break
	default:
		sueldo = 'error';
	break;
}

if(sueldo != 'error'){
	if( sueldo > 4000 ){
		alert("Muy Bien! El sueldo calculado del empleado superó los u$d 4000");
		alert("El sueldo fue de u$d " + sueldo);
	}else{
		alert("Quizá la próxima. El sueldo fue de u$d " + sueldo);
	}
}else{
	alert("ERROR: No existe esa categoría. Refrescá la ventana para volver a empezar");
}