const sum = require("./sumar")
const rest = require("./restar")
const mult = require("./multiplicar")
const div = require("./dividir")

const sumar = sum();
const restar = rest();
const multiplicar = mult();
const dividir = div();

const operaciones = [sumar, restar, multiplicar, dividir];
