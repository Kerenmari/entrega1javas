console.log(`EJERCICIO 1`);
console.log(`=====================`);

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(` ${i} es par`);
  } else {
    console.log(` ${i} es impar`);
  }
}

console.log(`=====================`);
console.log(`EJERCICIO 2`);

function compara(num1 = 0, num2 = 0) {
  if (num1 > num2) {
    return num1 + " es mayor" + num2;
  } else if (num1 < num2) {
    return num2 + "es mayor" + num1;
  } else {
    return "Ambos números son iguales";
  }
}
console.log(compara(8, 3));
console.log(compara(2, 2));

console.log(`=====================`);
console.log(`EJERCICIO 3`);

console.log(`=====================`);
console.log(`EJERCICIO 4`);

for (let i = 0; i <= 12; i++) {
  console.log(i);
}

console.log(`=====================`);
console.log(`EJERCICIO 5`);

for (let i = 1; i <= 6; i++) {
  console.log(`Mes`);
  console.log(i);
}

console.log(`=====================`);
console.log(`EJERCICIO 6`);
