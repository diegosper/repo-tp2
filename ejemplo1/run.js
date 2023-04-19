import chalk from 'chalk';
const inspeccionarObjeto = require("./src/modules/inspeccionar.js")

let unVector = ["Juan", "Pablo", "Vercesi"]

        unVector = [
            "Juan",
            43,
            true,
            function () { return null }
        ]

        console.log(unVector[0]);
        let segundoElemento = 1
        console.log(unVector[2]);
        console.log(unVector[3895829]);

        let unVectorAsociativo = {
            nombre: "Juan",
            edad: 43,
            esDeBoca: true,
            devolvedor: function () { return null}
            
        }

        console.log(unVectorAsociativo); // VECTOR ASOCIATIVO = SIMILAR AL HASHMAP

        console.log(unVectorAsociativo['nombre']);

        let atributoQueVoyALeer = 'edad'
        unVectorAsociativo[atributoQueVoyALeer]
        unVectorAsociativo.esDeBoca

        unVectorAsociativo.devolvedor()
        unVectorAsociativo['devolvedor']()
    
        console.log(chalk.red('Hello world!'));

        inspeccionarObjeto("El mensjae es" , unVectorAsociativo)

