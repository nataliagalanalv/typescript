function calcularMedia (array: number[]): number | null {
    if (array.length === 0) return null;
    
    const suma = array.reduce((acc, val) => acc + val, 0);
    return suma / array.length;
}

function calcularMediana(array: number[]): number | null {
  if (array.length === 0) return null;

  const sorted = [...array].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

function filtrarAtipicos(array: number[], limite: number = 2): number[] {
  if (array.length === 0) return [];

  const media = array.reduce((a, v) => a + v, 0) / array.length;
  const varianza = array.reduce((a, v) => a + (v - media) ** 2, 0) / array.length;
  const sigma = Math.sqrt(varianza);

  // Si sigma === 0, todos los valores son iguales → ninguno es atípico
  if (sigma === 0) return [...array];

  return array.filter(v => Math.abs(v - media) <= limite * sigma);
}


export { calcularMedia, calcularMediana, filtrarAtipicos };