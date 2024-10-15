/**
 * BLOQUE 3 - Solucion con callbacks
 * Un callback es una funcion que pasamos como parametro a otra funcion,
 * con el fin de ejecutar la funcion que se pasa como parametro en el
 * momento que queramos.
 * NOTA: No es una buena practica utilizar calbacks porque se van anidando
 * y el codigo se vuelve ilegible.
 */
const showSuccesMessage = () => {
  console.log("3. Enviando producto");
};

const validatePayment = (showSuccesMessage) => {
  setTimeout(() => {
    console.log("2. Validando pago...");
    showSuccesMessage();
  }, 0);
};

// flujo main
console.log("========== BLOQUE 3 ==========");
console.log("1. Dar click en pagar");
validatePayment(showSuccesMessage);
