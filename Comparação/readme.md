#  Comparação de valores

- Dentro JS, existem formas diferentes de lidar com a comparação de valores, e isso na igualdade principalmente... Pois dependendo da expressão de igualdade usada, os valores podem ser igauis ou não!

Usamos as condições em ```if else``` para que seja entendido a prévia destes valores.

# 
## Definição das igualdades:

**As expressão (==) representa a comparação de valores que são iguais ou não, indeferindo seu tipo de valor. Vemos isso a partir do código de:**

```jsx
if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
};
```
**Já a expressão de (===) compara estes dois valores, levando agoira a consideração seu tipo, sendo booleano, numérico ou string! Representado pelo código de:**

```jsx
if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
};
```

Ainda podemos levar em consideração o inverso desas duas comparações, onde usamos a expressão "diferente de" para a comparação de valores...
Isso pode ser representado em:

```jsx
if (true != “true”) //retorna false
if (4 != “4”) //retorna false
if (true !== “true”) //retorna true
if (4 !== “4”) //retorna true
if (true !== true) //retorna false
if (4 !== 4) //retorna false
```

# 