import * as rls from "readline-sync";

function calcularPotencia(base: number, exponente: number): number {
    if (exponente == 0) {
        return 1;
    } else {
        return base * calcularPotencia(base, exponente - 1);
    }
}

let base: number = rls.questionInt("Ingrese el numero de la base: ");
let exponente: number = rls.questionInt("Ingrese el numero del exponente: ");

console.log("El resultado es: " + calcularPotencia(base, exponente));