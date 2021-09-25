class Documento {
    constructor(conteudo) {
        this.conteudo = conteudo;
    }
    imprimir() {
        console.log("Conteúdo:", this.conteudo)
    }
}

class Oficio extends Documento {
  constructor(numero, conteudo) {
    super(conteudo);
    this.numero = numero;
 
  }
  imprimir() {
      console.log("Número: " + this.numero)
      console.log("Conteúdo:", this.conteudo)
  }
}
  
class Carta extends Documento {
  constructor(remetente, destinatario, conteudo) {
    super(conteudo);
    this.remetente = remetente;
    this.destinatario = destinatario;
  }
  imprimir() {
      console.log("Remetente: " + this.remetente);
      console.log("Destinatário: " + this.destinatario);
      console.log("Conteúdo:", this.conteudo);
  }
}