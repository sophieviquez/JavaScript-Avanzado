/**
 * BLOQUE 1 = Codigo Sincrono
 * Las lineas de codigo se ejecutan siempre
 * una despues de la otra.
 */

// console.log('========== BLOQUE 1 ==========');
// console.log('1. Dar click en pagar');

// for (let i = 0; i < 100; i++) {
//     console.log('i vale:', i);
//     console.log('2. Validando pago...');
// }

// console.log('3. Enviando producto');

/**
 * BLOQUE 2 - Codigo asincrono
 * Cuando hay lineas de codigo que no dependen unicamente de JS,
 * JavaScript las forma y ejecuta al final (esa cola que se genera
 * tampoco se vacia necesariamente en el mismo)
 */

console.log("========== BLOQUE 2 ==========");
console.log("1. Dar click en pagar");

setTimeout(() => {
  console.log("2. Validando pago...");
}, 0);

console.log("3. Enviando producto");
