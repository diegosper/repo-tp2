// API: Application Programming Interface


//class
class ComandoDeAlgoQueSucede {

    //CONSTRUCTOR
    constructor(accion){
        if (typeof accion == 'function') {
            this.accion=accion;
        } else {
            this.receptor = accion;
        }
        
    }

    // FORMAS DE ESCRIBIR UNA FUNCIÓN DE UNA CLASE (no hace falta la palabra 'function')
    ejecutar(){
        console.log('tengo que hacer algo antes del callback');

        if (this.accion) { //ESTE IF INTENTA EVALUAR LO QUE HAY ADENNTRO COMO BOOLEANO
            // CUANDO EVALÚO ALGO COMO BOOLEANDO, PERO QUE EN REALIDAD NO ES BOOLEANO,
            // JS LO EVALÚA COMO FALSO BOOLEANO (¿cohersión de datos?)
            this.accion();
        } else {
            this.receptor.ejecutar();
        }
        this.accion(); //LOS PARÉNTESIS SIGNIFICAN "invocate"
        console.log('acá finalizamos la ejecución');
    }
}

class ImprimirMensaje{
    ejecutar(){
        console.log('Mensaje impresouuuu');
    }
}

class Molesta{
    noEjecutar(){
        return null;
    }

}

// Esta funcion es una idea de comportamiento

function algoQueSucede(){
    console.log("Sucedió algo");
}

//algoQueSucede();

const comandoDeAlgoQueSucede = new ComandoDeAlgoQueSucede(algoQueSucede); //ATENCIÓN QUE ESTOY PASANDO POR PARÁMETRO EL OBJETO FUNCIÓN (sin paréntesis)

// Función anónima
const otroComando = new ComandoDeAlgoQueSucede(function(){ console.log("Otro mensaje");});

// Arroy function
const unComandoMas = new ComandoDeAlgoQueSucede(()=>{console.log("y va el tercero");})

// OBJETO FUNCIÓN:
// EL OBJETO (ref en memoria) TIENE ASOCIADO UN BLOQUE DE CÓDIGO

comandoDeAlgoQueSucede.ejecutar();
otroComando.ejecutar();
unComandoMas.ejecutar();

const imprimirMensaje = new ImprimirMensaje();
const comandoCompuesto = new ComandoDeAlgoQueSucede(imprimirMensaje); 

const seRompe = new ComandoDeAlgoQueSucede(new Molesta())
seRompe.ejecutar();




