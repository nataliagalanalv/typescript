"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_utils_1 = require("./math-utils");
const datosPrueba = [10, 12, 11, 15, 100, 14, 13];
const limitePermitido = 50;
console.log("--- Resultados del Laboratorio 1 ---");
console.log(`Media: ${(0, math_utils_1.calcularMedia)(datosPrueba)}`);
console.log(`Mediana: ${(0, math_utils_1.calcularMediana)(datosPrueba)}`);
console.log(`Datos filtrados (sin atípicos): ${(0, math_utils_1.filtrarAtipicos)(datosPrueba, limitePermitido)}`);
