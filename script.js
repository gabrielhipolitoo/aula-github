import { ObjectEndereços as Endereco } from "./getitems.js";

// aula 9 funções

// null;

// aula 9 função built-in

// let idade = prompt("Qual a sua idade")

// alert(idade)

// funcção Math.x()

// const soma = Math.max( 20)
// alert(soma)

// livro

// function test(string){
//     console.log(typeof string)
//     return string ? console.log('true'): console.log(false);
// };

// test( new Object(false))

// Programação orientada a objetos em Javascript

//  maneiras de criar um objeto
// const obj = new Object()
// let obj;
// obj = {
//   name: {
//     first: "Gabriel",
//     last: "hHpolito",
//   },
//   andress: "Vida Nova - Lauro de Freitas",
// };


// usando construtor com function

// function Book(tittle,author,preco){
//     this.tittle = tittle;
//     this.author = author;
//     this.preco = preco;
//     this.mostrar = function(){
//         console.log(this.author)
//     }

// }

// function Book(tittle,author,preco){
//     this.tittle = tittle;
//     this.author = author;
//     this.preco = preco;
//     this.mostrar = function(){
//         console.log(this.author)
//     }

// }

// function Person(nome,idade,profissão,...spread){

//     this.nome = nome;
//     this.idade = idade;
//     this.profissão = profissão;
//     this.ficha = function(){
//         console.log(nome,idade,profissão,spread)
//     }
// }

// const book = new Book('O preco do amanha','gabriel',200)
// const book1 = new Book('O preco do amanha 2','gabriel hipolito',250)

// Book.prototype.printTitle = function(){
//     console.log(this.preco)
// retorna o nome do preco
// }

// const eu = new Person('Gabriel',24,"programador",'Gosto de lasanha',' amo alana')

// eu.ficha()

// spread

// const [a, x] = ["1", 122];

// console.log(x);

// shorthand method names
// const data = {
//   dataHoje: new Date(),
//   printData() {
//     console.log(this.dataHoje);
//   },
// };

// console.log(data.printData());

// const hello = {
//   name: "abcdef",
//   printHello() {
//     console.log("Hello");
//   },
// };
// console.log(hello.printHello());


// programação orientada a objetos com classes

// class Carro {
//     constructor(nome,portas,preco){
//         this.nome = nome;
//         this.portas = portas;
//         this.preco = preco;
//     }
// }

// //herança
// class Person extends Carro {
//     constructor(nome,carro,idade,portas,preco){
//         super(nome,portas,preco)
//         this.nome = nome;
//         this.carro = carro;
//         this.idade = idade;
//     }
// }

// const pesssoa = new Person('Gbairl','ford ka',24,4, 1920)
// console.log(pesssoa)

// exercicio prático - descobrindo o carro mais caro

// const listaCarros = []


// class Carro {
//     constructor(nome,portas,preco){
//         this.nome = nome;
//         this.portas = portas;
//         this.preco = preco;
//         this.adicionar = function (){
//            this.obj = {nome,portas,preco}
//            listaCarros.push(this.obj)
//            console.log('lista >', listaCarros)
//            return "Carro adicionado"
//         }
    
//     }

//     get verificar(){
//        return listaCarros.filter(item => console.log(Math.max(item.preco)))
//     }
// }

// const carro1 = new Carro('Fusion',"4",3000.0)
// const carro2 = new Carro('jeep',"4",8500.0)

// console.log(carro1.adicionar())
// console.log(carro2.adicionar())

// console.log(carro1.verificar)


// const dados1 = new Endereco('Gabriel','Lauro de Freitas','Vida Nova',16)
// const dados2 = new Endereco('Alana','Lauro de Freitas','Vida Nova',38)

// dados1.adicionar()
// dados2.adicionar()

// let averageTemp = []





// function printMaxList(averageTemp){
//     for(let i=0; i < averageTemp.length; i++){
//         for(let j = 0; j < averageTemp.length;j++){
//             console.log(averageTemp[i][j])
//         }
//     }
// }

// printMaxList(averageTemp)


// let currentPlayer = 'X';
// let gameActive = true;
// let gameState = ['', '', '', '', '', '', '', '', ''];
// const winConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];

// document.addEventListener('DOMContentLoaded', () => {
//   const cells = document.querySelectorAll('.cell');
//   cells.forEach((cell, index) => {
//     cell.addEventListener('click', () => placeMark(index));
//   });

//   const resetButton = document.getElementById('resetButton');
//   resetButton.addEventListener('click', resetGame);
// });

// function placeMark(cellIndex) {
//   if (gameActive && gameState[cellIndex] === '') {
//     gameState[cellIndex] = currentPlayer;
//     document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
//     checkWin();
//     checkDraw();
//     currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//   }
// }

// function checkWin() {
//   for (let condition of winConditions) {
//     const [a, b, c] = condition;
//     if (
//       gameState[a] !== '' &&
//       gameState[a] === gameState[b] &&
//       gameState[a] === gameState[c]
//     ) {
//       gameActive = false;
//       document.getElementById('message').innerText = `${currentPlayer} venceu!`;
//     }
//   }
// }

// function checkDraw() {
//   if (!gameState.includes('') && gameActive) {
//     gameActive = false;
//     document.getElementById('message').innerText = 'Empate!';
//   }
// }

// function resetGame() {
//   currentPlayer = 'X';
//   gameActive = true;
//   gameState = ['', '', '', '', '', '', '', '', ''];
//   document.getElementById('message').innerText = '';
//   const cells = document.getElementsByClassName('cell');
//   for (let cell of cells) {
//     cell.innerText = '';
//   }
// }



// const isEven = x => x % 2 === 0;

// const numbers = [1,23,4,5,6,8]

// numbers.reduce((previous, current) => console.log(previous + current))

// for (const n of numbers){
//   console.log(n % 3 === 0)
// }

// const entries = numbers.entries();

// for ( const n of entries){
//   console.log(n)
// }
// criando uma nova lista apartir de uma lista criada
// const numbers2 = Array.from(numbers, x => (x % 2 ==0))

// const numbers3 = Array.of(3)
// console.log(numbers3)


// projeto Notas escoalar


const alunos = [
  {
    nome: "gabriel",
    notas: {
      matematica: 6,
      portugues: 4,
      ingles: 7,
      fisica: 9
    }
  },
  {
    nome: "alana",
    notas: {
      matematica: 5,
      portugues: 7,
      ingles: 3,
      fisica: 10
    }
  }
];






alunos.map((aluno,i) => {
  const values = Object.values(alunos)
  const alunos_notas = Object.values(values[i].notas)
  const resultado = alunos_notas.reduce((acc,nota) => acc + nota,0)
  console.log(resultado / 4)
  console.log(resultado / 4 >= 10 ? "Passou":"Não passou")
})


