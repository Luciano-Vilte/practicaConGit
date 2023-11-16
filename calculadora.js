const sum = require("./sumar")
const rest = require("./restar")
const mult = require("./multiplicar")
const div = require("./dividir")

const sumar = sum.suma(5,10);
const restar = rest.restar(10,5);
const multiplicar = mult.multiplicar(10,2);
const dividir = div.dividir(10,5);

// const operaciones = [sumar, restar, multiplicar, dividir];
 
console.log(sumar)
console.log(restar)
console.log(multiplicar)
console.log(dividir)