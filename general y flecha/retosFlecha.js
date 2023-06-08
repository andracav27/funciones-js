// Realizar en manera d efuncion y de flecha los siguientes ejercicios.

// Calcular el cuadrado de un número
//General
function cuadrado (num) {
    return num * num ;

}

//Flecha
 const cuadradoFlecha = num => num * num;

 // Escribir un codigo que convierta de grados celcius a grados farenheit
 //Genereal
 function convertir (celcius){
    return "La temperatura a Farenheit  es = " + ((celcius * 1.8) + 32);

 }

 //Flecha
 const GradosFlecha = celcius =>"La temperatura Farenheit es = " + ((celcius * 1.8) + 32);


 //Calcular el valor del voltaje
 //General

 function voltaje (resistencia, corriente){
    return "El valor del voltaje es: " + resistencia * corriente ;

 }

 //Flecha
 const VoltajeFlecha = (resistencia, corriente ) => {
    return "El voltaje es: " + resistencia * corriente ;

 }

 //Funcion que calcule el volumen de un cubo, recibiendo como dato de entrada lado.
 //General

 function volumen (lado) {
    return " El volumen es: " +  lado * lado * lado ;


 }

 //Flecha
 const volumenFlecha = lado => lado * lado * lado;
 return "El volumen es: " + lado * lado * lado;

 //Calcular el área de un triángulo
 //General
 function areaTriangulo (base , altura){
 return (base * altura ) / 2;

 }

//


//calcular el volumen de una esfera
//General
function volumenEsfera (radio ){
    return (4 / 3) * (Math . PI ) * (radio ** 3);

}

//Flecha
const volumenEsferaFlecha = radio => (4 / 3) * (Math. PI) * (radio ** 3);

//Convertir una cadena de texto  a mayuscula usando el metodo .toUpperCase()

//Genral
function PrimeraLetraMayuscula(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
//Genera 2


function mayuscula (texto){
    return texto .toUpperCase ();
}
//Flecha
const MayusFlecha = texto => texto .toUpperCase ();

