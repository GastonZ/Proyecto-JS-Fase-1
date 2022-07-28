// OBJETIVOS 

// 0 - Crear un proceso en el cual puedas acceder a una de 3 opciones.

/* Empezaria por un prompt el cual te dice indicar cual app quieres utilizar*/

// 1 - Reloj.

/* Funciona asi por el momento : Primero el usuario indica cuantas sets (explicar que es) va a realizar
   , entonces el reloj va a devolver cuantas repeticiones deberias hacer asi como tambien cuanto tiempo de descanso  */

// 2 - Lista de Tareas. 

/* (Explicar funcionamiento al usuario) El usuario escribira su rutina y al terminar de escribir
    esta se vera reflejada en el html ! */

// 3 - App donde al elegir un musculo que quieras trabajar esta te devuelva consejos de ejercicios.

/* Dar opciones de los grupos musculares, y dependiendo cual elija el usuario mostrar un alert con consejos,
luego preguntar si le gustaria saber mas */


let rep3 = ["Hacer 3 a 6 repeticiones con peso pesado"]
let desc3 = ["Descansar de 2 a 5 minutos despues de cada set"]

let rep4 = ["Hacer de 4 a 6 repeticiones con peso medianamente pesado"]
let desc4 = ["Descansar de 2 a 4 minutos despues de cada set"]

let rep5 = ["Hacer de 6 a 8 repeticiones con peso ligeramente pesado"]
let desc5 = ["Descansar de 2 a 3 minutos despues de cada set"]

let rep6 = ["Hacer de 8 a 10 repeticiones con peso un peso medio que controles bien"]
let desc6 = ["Descansar 2 minutos a 3 minutos"]

let rep7 = ["Hacer de 10 a 12 repeticiones con un peso ligero medio"]
let desc7 = ["Descanso de 2 minutos"]

let rep8 = ["Hacer de 12 a max repeticiones con un peso ligero"]
let desc8 = ["descanso de 2 minutos"]

// Dependiendo de la eleccion del usuario se ejecutara una de las siguientes -->

let bienvenido = prompt('Bienvenido, a continuacion puede elegir una de las siguientes apps... \n Reloj \n Lista (Lista de Tareas) \n Consejos ')
 
function appReloj(){

//  APP DE RELOJ FASE 1

    if(bienvenido == "Reloj" || bienvenido == "reloj"){
      alert('Bienvenido al reloj, precione aceptar para continuar'); 
        eleccion = prompt('Cuantos sets vas a realizar hoy ? \n Se recomiendo entrenar entre 3 y 8 sets \n Pruebe ingresando un numero del 3 al 8');
        if(eleccion == "tres" || eleccion == 3){
            alert(`Repeticiones a realizar : ${rep3} \n Tiempo de descanso : ${desc3}`)
        }else if(eleccion == "cuatro" || eleccion == 4){
            alert(`Repeticiones a realizar : ${rep4} \n Tiempo de descanso : ${desc4}`)
        }else if(eleccion == 5){
            alert(`Repeticiones a realizar : ${rep5} \n Tiempo de descanso : ${desc5}`)
        }else if(eleccion == 6){
            alert(`Repeticiones a realizar : ${rep6} \n Tiempo de descanso : ${desc6}`)
        }else if(eleccion == 7){
            alert(`Repeticiones a realizar : ${rep7} \n Tiempo de descanso : ${desc7}`)
        }else if(eleccion == 8){
            alert(`Repeticiones a realizar : ${rep8} \n Tiempo de descanso : ${desc8}`)
        } else(alert('Estas loco ? Reinicia y vuelve a intentarlo')) }
        

}



function appLista(){

    if( bienvenido == "Lista" || bienvenido == "lista"){
         alert('Bienvenido a la lista de tareas, precione aceptar para continuar');
    }eleccion1 = prompt('Crea tu rutina de entrenamiento para hoy ! \n Sigue los pasos y estaras listo para entrenar hoy ! \n Escribe VAMOS para empezar')
       
    if(eleccion1 == "Vamos" || eleccion1 == "vamos" || eleccion1 == "VAMOS"){
            rutina = prompt('Primero elije que musculos vas a entrenar, estas son las diviciones mas efectivas : \n Pecho y Biceps (escribe "pyb" \n Espalda y Triceps ("eyt" \n Piernas y hombros "pyh"')
        }if( rutina == "pyb" || rutina == "PYB"){
            document.write('Tu rutina es... <br> 1 - Press de Banca 2 - Press de banca inclinado <br> 1- Biceps Curls 2- Biceps Martillo')
        }else if (rutina == "eyt" || rutina == "EYT"){
            document.write('Tu rutina es... <br> 1 - Dominadas 2 - Remo <br> 1 - Triceps con polea 2- Triceps frances')
        }else if (rutina == "pyh" || rutina == "PYH"){
            document.write('Tu rutina es... <br> 1 - Squats 2- Leg presss <br> 1- Press de hombro 2- Elevaciones laterales')
        }    

}


appReloj();
appLista();


// APP DE CONSEJOS (probablemente la quite o cambie por otra distinta mas adelante y la deje implementada de otra manera)   
/* } else if (bienvenido == "Consejos" || bienvenido == "consejos"){
    alert('Bienvenido a su mejor amigo al momento de entrenar, precione aceptar para continuar');

} */
