// DE UN ARREGLO, TOMAR NOTAS APROBATORIAS Y PROMEDIARLAS

let todas_calificaciones = [21, 12, 44, 93, 78, 23, 74, 82, 23, 43, 74, 78, 93, 87, 78, 83, 92, 99, 99];

let calificaciones_aprobatorias = todas_calificaciones.filter(num => num >= 70);

let promedio = (calificaciones_aprobatorias.reduce((acumulador, valor_actual) => acumulador + valor_actual, 0)) / calificaciones_aprobatorias.length;

console.log(promedio);

// Con ayuda de chatgpt porque las arrow function me marean bien horrible