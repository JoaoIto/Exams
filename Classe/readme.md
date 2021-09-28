# Classes e heranças no JS

- A Documento, já pré-construída no campo de resposta, possui um atributo conteudo, um construtor que permite a criação de objetos com um valor para conteudo, e um método imprimir(), que exibe no console o conteúdo do documento.

- A partir da classe Documento, crie mais duas classes que a estendam (classes filhas): Oficio e Carta. A classe Oficio deve possuir um atributo numero, e seu construtor deve permitir a criação de um objeto já com numero e conteudo definidos. Esta classe deve sobrescrever o método imprimir(), de modo a imprimir primeiro o atributo numero e depois o atributo conteudo. Observe a forma como esses atributos devem ser impressos nos exemplos desta questão.

- A classe Carta deve possuir um atributo remetente e um atributo destinatario, e seu construtor deve permitir a criação de um objeto já com remetente, destinatario e conteudo definidos. Esta classe deve sobrescrever o método imprimir(), de modo a imprimir os atributos remetente, destinatario e conteudo. Observe a forma como esses atributos devem ser impressos nos exemplos desta questão.

#

<h3>For example:</h3>

- Test {
```
    const oficio = new Oficio(4, "Este é apenas um teste. Não se preocupe.");
oficio.imprimir();

    const carta = new Carta("José", "Maria", "Oi, Maria! Aqui é o José");
carta.imprimir();
```
}

- Result {
```
Número: 4
Conteúdo: Este é apenas um teste. Não se preocupe.

Remetente: José
Destinatário: Maria
Conteúdo: Oi, Maria! Aqui é o José
```
}
