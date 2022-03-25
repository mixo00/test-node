# Introducción

Una vez descargado instalaremos el **`node_modules`** y lo correremos en modo **`dev`**

```shell
npm i
npm run dev
```

ahora solo abrimos cualquier navegador y colocamos [**`http://localhost:3000`**](http://localhost:3000) y podremos validar el sistema de forma visual

# End-point

Para ocupar el end-point que calculara los numeros primos

```shell
http://localhost:3000/calculate
```

el cual espera como body un numero

```json
{
  "number": 10
}
```

y su respuesta sera un arreglo de numeros

```json
{
  "numbers": [7, 5, 3, 2]
}
```

la función que valida si es un número primo es:

```ts
const validationPrime = (numero: number): boolean => {
  for (let i: number = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return numero !== 1;
};
```

con esa función la recorremos con el número ingresado por el usuario, guardamos los valores en un arreglo vacío

```ts
let primeNumber: number[] = [];
for (let i: number = number; i >= 2; i--) {
  if (validationPrime(i)) primeNumber.push(i);
}
```

para dejarlo de forma ascendente invertimos los valores del **`for()`**, por ejemplo

```ts
let primeNumber: number[] = [];
for (let i: number = 2; i >= number; i++) {
  if (validationPrime(i)) primeNumber.push(i);
}
```

# Docker

para crear el docker en su local se tiene que ubicar en la temrinal donde este el dockerfile del proyecto y ejecutar el siguiente comando

```shell
docker build -t test-node .
```

luego para levantar el docker usamos

```shell
docker run -dp 3000:3000 test-node
```

# Test unitarios

para correr los test solo tienes que ejecutar

```shell
npm run test
```
