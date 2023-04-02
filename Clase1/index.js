/*

console.log("Hola mundo!!");
console.log("Hola mundo!!");
console.log("Hola mundo!!");
console.log("Hola mundo!!");
console.log("Hola mundo!!");
console.log("Soy Diego");

*/


// AGREGAR A UN ARRAY CON PUSH (al final)
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
numeros.push(6);
numeros.push(7);
console.log(numeros);

// AGREGO A UN ARRAY CON UNSHIFT (al principio)
numeros.unshift(0);
console.log(numeros);

// SI ASIGNO UN VALOR EN UN INDICE YA OCUPADO, REEMPLAZO EL VALOR EXISTENTE
numeros[1] = 'uno';
console.log(numeros);

//QUITAR ELEMENTOS DE UN ARRAY CON POP (al final)
numeros.pop() // ME DEVUELVE EL VALOR QUE ESTÁ REMOVIENDO (lo puedo guardar)
console.log(numeros.pop());
console.log(numeros);

const retirado = numeros.pop();
console.log(retirado);


// QUITAR ELEMENTOS DE UN ARRAY CON SHIFT (al principio)
// Al igual que POP, puedo guardar el valor que remuevo, ya que lo devuelve
let primero = numeros.shift();
console.log("numeros: " + numeros);
console.log("primero: " + primero);


// COPIA DE UN ARRAY
console.log("\n******** COPIA DE ARRAYS ********");

/*
let nombre1 = "Lucas";
let nombre2 = nombre1;

console.log("Nombre 1: " + nombre1);
console.log("Nombre 2: " + nombre2);
nombre2 = "Pepe";
console.log("Nombre 1: " + nombre1);
console.log("Nombre 2: " + nombre2);
*/

console.log("\n");
const productos = ["fideos", "sal", "cerveza", "salsa", "queso"];
const lista = productos;
//OJO CON ESTO, ME IGUAL LA LISTA EN TODO SENTIDO, MISMA POSICIÓN DE MEMORIA Y TODO.
//SI QUIERO HACER MODIFICACIONES, TENGO QUE TRABAJAR CON COPIAS, NO CON ORIGINALES

console.log("Productos: " + productos);
console.log("Lista: " + lista);
lista.push("helado");
productos.push("aceite");
console.log("Productos :" + productos);
console.log("Lista: " + lista);

// AHORA SI, HAGO LA COPIA DEL ARRAY PARA TRABAJAR DE FORMA DISTINTA AL ORIGINAL
const lista2 = [
    productos[0],
    productos[1],
    productos[2],
    productos[3],
    productos[4]
]
// ACÁ NO HAGO REFERENCIA A TODO EL ARRAY DE PRODUCTOS, SINO A CADA ELEMENTO DEL ARRAY

lista2.unshift("café");
console.log("nueva lista: " + lista2);
console.log("productos: " + productos);


// ******* BUCLES *******
console.log("\n-------- BUCLES --------\n");

let copiaProductos = [];
console.log(productos.length);
console.time("for");
for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    console.log(producto);

    copiaProductos.push(producto);
}
console.log(copiaProductos);
console.timeEnd("for");

// FOREACH 
// CON ARROW FUNCTION (ANÓNIMA)
console.time("foreach");
productos.forEach(producto => {
    copiaProductos.push(producto);
} )
console.log("Copia con foreach: \n" + copiaProductos);
console.timeEnd("foreach");

// COPIA DE ARRAY CON SLICE
console.log("\nCopia con slice");
//const productos2 = ["fideos", "sal", "cerveza", "salsa", "queso"];

// TENER EN CUENTA QUE ES COPIA SUPERFICIAL
console.time("slice");
const copiaSlice = productos.slice();
console.log(copiaSlice);
console.timeEnd("slice");

copiaSlice[0] = "arroz";
copiaSlice.push("papel");
console.log(copiaSlice);

// AL SLICE LE PUEDO PASAR PARÁMETROS
const copiaSlice2 = productos.slice(0, 3); // EL FIN ES LA CANTIDAD, NO EL ÍNDICE
console.log(copiaSlice2);

//
//
// COPIA DE ARRAY CON SPREAD OPERATORS (a partir de ES6)
//
// RECORDAR QUE SIEMPRE ES UNA COPIA SUPERFICIAL

const copiaSpread=[...productos];
console.log("\ncopia spread: " + copiaSpread);