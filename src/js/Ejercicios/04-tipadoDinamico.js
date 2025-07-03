let X = "==== NUEVA SECCION ===="
let Y = " ===="

// 04 TIPADO DINAMICO 
console.log(X + " 04 Tipado Dinamico")

let numero = 42;
let nombre = "Hola mundo";
let verdadero = true;
let undef;
let nula = null;

console.log(typeof numero)
console.log(typeof nombre)
console.log(typeof verdadero)
console.log(typeof undef)
console.log(typeof nula)

// 05 COMENTARIOS 
console.log(X + " 05 Comentarios")
let numero5 = 34; /* ESTO es un numero /*
//( bruh asi se hacen, con / )
/* bruh */
/**
 * lol
 * fiumba
 */
console.log(numero5)

// 06 OBJETOS
console.log(X + "06 Objetos")
let nombre6 = "Empanada";
let salsa6 = "Tomate";
let dias6 = "30"

let fritura = {
    nombre6: "Empanada",
    salsa6: "Tomate",
    dias6: "30",
};
console.log(fritura)
console.log(fritura.nombre6)
console.log(fritura["salsa6"])

fritura.dias6 = 20;
fritura["dias6"] = 15;

console.log(fritura.dias6)

delete fritura.salsa6;

console.log(fritura)

// 07 ARRAYS
console.log(X + " 07 Arrays")

let animales7 = ["pollo", "Caballo"];

console.log(animales7)
console.log(animales7[0]);
animales7[2] = "Cerdito";

console.log(animales7);

animales7[10] = "Camaron";
console.log(animales7);
console.log(animales7[2]);
console.log(animales7[4]);

console.log(typeof animales7)
console.log(animales7.length)

// 08 Funciones
console.log(X + " 08 Funciones")

function saludo8() {
    console.log("Hoola ;)")
}

saludo8();

function suma8() {
    return 2 + 2;
}
let resultado8 = suma8();
console.log(resultado8)
console.log(suma8())

// 09 Argumentos 
console.log(X + " 09 Argumentos" + Y)

function suma9(a, b) {
    console.log(arguments);
    return a + b;
}

let resultado9 = suma9(5, 6, 7, 8, 9);

console.log(resultado9);
console.log(typeof suma9)

// 010