console.log(`EJERCICIO 1`);
console.log(`=====================`);

const parImpar = numero => {
  if(numero % 2 === 0){
    console.log('el numero es par')
  } else{
    console.log('el numero es impar')
  }
}
parImpar(17)
parImpar(20)

console.log(`EJERCICIO 2`);
console.log(`=====================`);

function comparar(num1, num2){
  if(num1 >  num2){
      console.log(`el numero ${num1} es mayor ${num2}`)
  } else if(num1 < num2){
      console.log(`el numero ${num1} es menor ${num2}`)
  } else{
      console.log('los numeros son iguales')
  }
  }
comparar(67,77)
comparar(87,77)
comparar(77,77)

console.log(`EJERCICIO 3`);
console.log(`=====================`);

const multiplo = numero => {
  if(numero % 5 === 0){
    console.log('el numero es multiplo de 5')
  } else{
    console.log('el numero no es multiplo de 5')
  }
}
multiplo(15)
multiplo(17)

console.log(`EJERCICIO 4`);
console.log(`=====================`);

const imprimirNumeros = numero =>{
  for(let i = 0; i <= numero; i++){
    console.log(i)
  }
}
imprimirNumeros(7)

console.log(`EJERCICIO 5`);
console.log(`=====================`);

const imprimirPalabra = (palabra, numero) => {
  for(let i =  0; i < numero; i++){
    console.log(palabra)
  }
}
imprimirPalabra('Hola', 3)

console.log(`EJERCICIO 6`);
console.log(`=====================`);

const meses = ["enero", "febrero", "marzo", "abril", "Mayo"];
for (let i = 0; i < 5; i++){
  console.log(meses [i])
}


console.log(`EJERCICIO 7`);
console.log(`=====================`);


console.log(`EJERCICIO 8`);
console.log(`=====================`);