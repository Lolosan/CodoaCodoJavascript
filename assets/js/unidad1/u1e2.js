var diametro = Number( prompt("Ingresá acá el diámetro de un círculo:") );

const pi = 3.1416;

//Perímetro
var perimetro = pi * diametro;

//Área
//Se puede evitar pasar a radio, pero estamos jugando
var radio = diametro / 2;
var area = pi * radio * radio;

alert("Según el diámetro que ingresaste, el perímetro del círculo es: " + perimetro + " cm y su área es: " + area + " cm2");