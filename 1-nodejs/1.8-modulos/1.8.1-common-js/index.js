const operations = require("./functions");

function main() {
  const operando_one = 56;
  const operando_dos = 14;

  const resultSum = operations.sum(operando_one, operando_dos);
  const resultSubstract = operations.substract(operando_one, operando_dos);
  const resultMultiply = operations.multiply(operando_one, operando_dos);
  const resultDiv = operations.divideNumbers(operando_one, operando_dos);

  console.log(`La suma vale: ${resultSum}`);
  console.log(`La resta vale: ${resultSubstract}`);
  console.log(`La multiplicacion vale: ${resultMultiply}`);
  console.log(`La division vale: ${resultDiv}`);
}

main();
