// função fala se número é perfeito
function numeroPerfeito(n) {
  let sum = 0;
  /* repetição para descobrir se número é divisível
  é criada uma variável de possível divisor, para
  fazer o papel de testar e depois com a variável 
  "sum" fazer a soma dos divisores e mostrar se
  número é perfeito ou não... 
  */
  for (let x = 1; x <= n / 2; x++) {
    if (!(n % x)) {
      sum += x;
    }
  }

  return sum == n;
}
