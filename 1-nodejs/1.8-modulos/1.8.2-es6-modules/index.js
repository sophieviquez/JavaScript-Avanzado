import { sum, substract } from "./modules/suma-substract.js";
import * as Operations from "./modules/multiply-divide.js";

function main() {
  const operando_one = 56;
  const operando_dos = 14;

  const resultSum = sum(operando_one, operando_dos);
  const resultSubstract = substract(operando_one, operando_dos);
  const resultMultiply = Operations.multiply(operando_one, operando_dos);
  const resultDiv = Operations.divide(operando_one, operando_dos);

  console.log(`La suma vale: ${resultSum}`);
  console.log(`La resta vale: ${resultSubstract}`);
  console.log(`La multiplicacion vale: ${resultMultiply}`);
  console.log(`La division vale: ${resultDiv}`);
}

main();
