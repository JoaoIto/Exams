// função sequencia de fib

function fibonacci(n) {
  /* Aqui se define os casos de início de sequencia
    já que o fib da questão iria começar em 0 e não em
    1. */
  if (n === 3) return 1;
  if (n === 2) return 1;

  /* Definindo esses caso é só fazer a questão padrão de fibonacci,
     onde é definido o número de seu sucessor
     e indo em diante */

  return fibonacci(n - 1) + fibonacci(n - 2);
}
