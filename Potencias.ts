import * as readline from "readline-sync";

function calcularPotencia(base: number, exponente: number): number {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

let base: number;
while (true) {
    base = readline.questionInt("Ingrese el numero de la base: ");
    if (base > 0) break;
    console.log("Use un numero positivo.");
}

let exponente: number;
while (true) {
    exponente = readline.questionInt("Ingrese el numero del exponente: ");
    if (exponente > 0) break;
    console.log("Use un numero positivo");
}

console.log("El resultado es: " + calcularPotencia(base, exponente));