function mostrarMensaje(mensaje, callback) {
  callback(mensaje);
}

// Ejemplo de uso
mostrarMensaje("Este es un mensaje de prueba", console.log);

function tipoDeDato(variable, callback) {
  const tipo = typeof variable;
  callback(tipo, variable);
}

// Ejemplo de uso
tipoDeDato(42, (tipo, contenido) => {
  console.log(`El tipo de dato es: ${tipo} y su contenido es: ${contenido}`);
});

function operaciones(num1, num2, callback) {
  return callback(num1, num2);
}

// Ejemplo de uso
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

console.log(operaciones(10, 5, suma)); // 15
console.log(operaciones(10, 5, resta)); // 5
console.log(operaciones(10, 5, multiplicacion)); // 50
console.log(operaciones(10, 5, division)); // 2

function ordenSuperior(cadena, callback) {
  return callback(cadena);
}

const mayus = (str) => str.toUpperCase();
const minus = (str) => str.toLowerCase();

// Ejemplo de uso
console.log(ordenSuperior("PejeLagarto", minus)); // pejelagarto
console.log(ordenSuperior("PejeLagarto", mayus)); // PEJELAGARTO

function filtrarTiempo(tiempos, callback) {
  // Filtrar los tiempos mayores a 120 minutos (2 horas)
  const mayoresDosHoras = tiempos.filter((tiempo) => tiempo > 120);
  // Llamar al callback con el resultado
  callback(mayoresDosHoras);
}

// Ejemplo de uso
const tiemposArray = [120, 80, 200, 100];
filtrarTiempo(tiemposArray, (resultado) => {
  console.log("Tiempos mayores a 2 horas:", resultado);
});

// Esto es un cambio de prueba
