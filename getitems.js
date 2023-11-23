const arrayEndereços = [];

export class ObjectEndereços {
  constructor(nome, cidade, bairro, numero) {
    this.nome = nome;
    this.cidade = cidade;
    this.bairro = bairro;
    this.numero = numero;
    this.adicionar = function(){
        this.obj = {nome,cidade,bairro,numero}
        arrayEndereços.push(this.obj)
        console.log(arrayEndereços)
    }

  }


}
