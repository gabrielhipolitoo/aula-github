// // type ListaFuncionarios = {
// //   nome: string;
// //   idade: number;
// //   cargo: string;
// //   cidade: string;
// //   salario: number;
// //   nascimento: string;
// // };

// // const funcionarios = [
// //   {
// //     nome: "João",
// //     idade: 30,
// //     cargo: "Desenvolvedor",
// //     cidade: "São Paulo",
// //     salario: 5000,
// //     nascimento: "15/05/1993",
// //   },
// //   {
// //     nome: "Maria",
// //     idade: 28,
// //     cargo: "Designer",
// //     cidade: "Rio de Janeiro",
// //     salario: 4500,
// //     nascimento: "22/10/1995",
// //   },
// //   {
// //     nome: "Carlos",
// //     idade: 35,
// //     cargo: "Gerente de Projetos",
// //     cidade: "Belo Horizonte",
// //     salario: 7000,
// //     nascimento: "10/12/1987",
// //   },
// //   {
// //     nome: "Ana",
// //     idade: 25,
// //     cargo: "Analista de Marketing",
// //     cidade: "Brasília",
// //     salario: 4200,
// //     nascimento: "05/08/1998",
// //   },
// //   {
// //     nome: "Pedro",
// //     idade: 33,
// //     cargo: "Engenheiro de Software",
// //     cidade: "Curitiba",
// //     salario: 5500,
// //     nascimento: "20/03/1989",
// //   },
// //   {
// //     nome: "Fernanda",
// //     idade: 29,
// //     cargo: "Contadora",
// //     cidade: "Porto Alegre",
// //     salario: 4800,
// //     nascimento: "18/06/1994",
// //   },
// //   {
// //     nome: "Lucas",
// //     idade: 27,
// //     cargo: "Analista de Sistemas",
// //     cidade: "Recife",
// //     salario: 4800,
// //     nascimento: "25/09/1996",
// //   },
// //   {
// //     nome: "Julia",
// //     idade: 31,
// //     cargo: "Arquiteta",
// //     cidade: "Salvador",
// //     salario: 6000,
// //     nascimento: "12/11/1991",
// //   },
// //   {
// //     nome: "Mariana",
// //     idade: 26,
// //     cargo: "Jornalista",
// //     cidade: "Fortaleza",
// //     salario: 4200,
// //     nascimento: "08/04/1997",
// //   },
// //   {
// //     nome: "Rafael",
// //     idade: 32,
// //     cargo: "Consultor Financeiro",
// //     cidade: "Manaus",
// //     salario: 5800,
// //     nascimento: "30/07/1990",
// //   },
// //   {
// //     nome: "Gabriela",
// //     idade: 29,
// //     cargo: "Recrutadora",
// //     cidade: "Natal",
// //     salario: 4500,
// //     nascimento: "14/02/1994",
// //   },
// //   {
// //     nome: "Roberto",
// //     idade: 34,
// //     cargo: "Advogado",
// //     cidade: "Florianópolis",
// //     salario: 6200,
// //     nascimento: "19/09/1988",
// //   },
// //   {
// //     nome: "Amanda",
// //     idade: 27,
// //     cargo: "Enfermeira",
// //     cidade: "Vitória",
// //     salario: 4300,
// //     nascimento: "07/03/1996",
// //   },
// //   {
// //     nome: "Diego",
// //     idade: 30,
// //     cargo: "Professor",
// //     cidade: "Porto Velho",
// //     salario: 5000,
// //     nascimento: "25/01/1993",
// //   },
// //   {
// //     nome: "Isabela",
// //     idade: 28,
// //     cargo: "Psicóloga",
// //     cidade: "Campo Grande",
// //     salario: 4700,
// //     nascimento: "28/06/1995",
// //   },
// //   {
// //     nome: "Daniel",
// //     idade: 33,
// //     cargo: "Engenheiro Civil",
// //     cidade: "João Pessoa",
// //     salario: 6300,
// //     nascimento: "03/12/1989",
// //   },
// //   {
// //     nome: "Laura",
// //     idade: 29,
// //     cargo: "Farmacêutica",
// //     cidade: "Maceió",
// //     salario: 4800,
// //     nascimento: "17/10/1994",
// //   },
// //   {
// //     nome: "Bruno",
// //     idade: 31,
// //     cargo: "Analista de Recursos Humanos",
// //     cidade: "Teresina",
// //     salario: 5200,
// //     nascimento: "09/11/1991",
// //   },
// // ];

// // function filtrarFuncionario(func: ListaFuncionarios[]) {
// //   const filtro = func.filter((funcionario) => funcionario.idade >= 30 && funcionario.salario > 7000);
// //   console.log(filtro)

// //   filtro.map((funcionario) => {
// //     document.body.innerHTML += `
// //     <div>
// //       <h2>${funcionario.nome}</h2>
// //       <p>${funcionario.idade}</p>
// //       <p>${funcionario.salario}</p>
// //       <p>${funcionario.cargo}</p>
// //     </div>
// //     `
// //   })
// // }

// // filtrarFuncionario(funcionarios);


// // interface Produto {
// //   nome?:string;
// //   idade:number
// // }

// // const pessoa: Produto ={
// //   idade:20
// // }

// // console.log(pessoa)

// interface Carro  {
//   placa:string;
//   cor:string;
//   situacao:boolean;
//   porta:number;
// }



// class CarroClass {
//   inforCarro: Carro;

//   constructor(carro:Carro){
//     this.inforCarro = carro
//   }


//   verificarSituação(){

//     const possoAndar = this.inforCarro.situacao

//     if(possoAndar){
//       return ` ${this.inforCarro.placa} --- Posso andar`
//     }

//     else{
//       return ` ${this.inforCarro.placa} --- não posso andar`
//     }

//   }
// }

// const carroInfo: Carro = {
//   placa: 'ABC1234',
//   cor: 'blue',
//   situacao: false,
//   porta: 4,
// };

// const carroUm = new CarroClass(carroInfo)

// console.log(carroUm.inforCarro)
// console.log(carroUm.verificarSituação())