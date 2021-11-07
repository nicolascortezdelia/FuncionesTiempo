//Cuando quiera ejecutar una acción LUEGO de un cierto tiempo. ej: cuando saltan las publicidades.
let contador = 1;

function saludar(){
    document.write("<br> Hola Mundo");
    if(contador == 5){
        //cuando contador sea igual a 5 que se detenga el set interval
        window.clearInterval(intervalo)
    }
    contador++;

}
//Opción 1
//window.setTimeout(saludar, 3000);

//Opción 2
//setTimeout(saludar,3000);

//CON FUNCIÓN ANÓNIMA

//OPCIÓN 1
/*setTimeout(function() {document.write("<br> Hola Mundo");}, 3500);*/

/*setTimeout(() => {
    document.write("<br> Hola Mundo");
}, 3500);*/


//¡¡¡¡¡una función que se ejecute cada cierto tiempo en MS un auto refresh


let intervalo = window.setInterval(saludar,1500)

