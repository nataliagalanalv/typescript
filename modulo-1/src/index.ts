import { calcularMedia, calcularMediana, filtrarAtipicos } from './math-utils';

const datosPrueba = [10, 12, 11, 15, 100, 14, 13]; 
const limitePermitido = 50;

console.log("--- Resultados del Laboratorio 1 ---");
console.log(`Media: ${calcularMedia(datosPrueba)}`);
console.log(`Mediana: ${calcularMediana(datosPrueba)}`);
console.log(`Datos filtrados (sin atípicos): ${filtrarAtipicos(datosPrueba, limitePermitido)}`);