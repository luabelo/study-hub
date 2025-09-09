// 1 + 2 + 3 + .... + n-2 + n-1 + n
// async/await
// const fatorial = (n) => {
//     //n * (n-1) * (n-2) * ... * 3 * 2 * 1
//     if(n < 0)
//         return Promise.reject("Sem Negativos!!")
//     if(n ===0)
//         return Promise.resolve(1)
//     let ac = 1
//     for(let i = 2; i <= n; i++)
//         ac *= i
//     return Promise.resolve(ac)
// }

// function chamadaComThenCatch(){
//     const n1 = 5
//     const n2 = -1

//     fatorial(n1)
//     .then(res => console.log(`Res: ${res}`))
//     .catch(err => console.log(`Erro: ${err}`))

//     fatorial(n2)
//     .then(res => console.log(`Res: ${res}`))
//     .catch(err => console.log(`Erro: ${err}`))
// }

// const chamadaComAsyncAwait = async () => {
//     const n1 = 5
//     const n2 = -1
//     const res1 = await fatorial(n1)
//     console.log(`Resultado: ${res1}`)
//     try{
//         const res2 = await fatorial(n2)
//         console.log(`Resultado: ${res2}`)
//     }
//     catch(err){
//         console.log(`Erro: ${err}`)
//     }
// }

// chamadaComAsyncAwait()
// async function hello(nome){
//     return `Olá ${nome}`
// }
// const res = hello('Luana')
// res.then(r => console.log(`Resultado: ${r}`))

// const desafio = (n) => {
//     return new Promise(function(resolve, reject){
//         n >= 0 ? resolve((n / 2) * (n + 1)) : reject("Não use valores negativos :D")
//     })
// }
// const p = desafio(10)
// p.then((r) => {console.log(r)}).catch((r) => {console.log(r)})

// const calculoRapido = (n) => {
//     return new Promise(function(resolve, reject){
//         resolve((n / 2) * (n + 1))
//     })
// }
// const p = calculoRapido(10)
// p.then((r) => {
//     console.log(`Resultado ${r}`)
// })

// const calculoDemorado = (n) => {
//     const p = new Promise((resolve, reject) => {
//         let ac = 0
//         for(let i = 1; i <= n; i++) ac += i
//         resolve(ac) 
//     })
//     return p 
// }
// const minhaPromise = calculoDemorado(10)
// //then/catch
// minhaPromise.then((res) => {
//     console.log(`Resultado: ${res}`)
// })
// console.log('Terminando...')

// const res = calculoDemorado(10)
// console.log(res)

// const fs = require('fs')
// const abrirArquivo = function(nomeArquivo){
//     // callback: você define, mas não chama
//     function exibirConteudo(erro, conteudo){
//         if (erro){
//             console.log(`Erro: ${erro}`)
//         }
//         else{
//             console.log(
//                 `Conteúdo: ${conteudo.toString()}`
//             )
//             const dobro =
//                 Number(conteudo.toString()) * 2
//             const finalizar = (erro) => {
//                 if(erro){
//                     console.log(
//                         `Erro na escrita ${erro}`
//                     )
//                 }
//                 else {
//                     console.log('Escrita ok')
//                 }
//             }
//             fs.writeFile(
//                 'dobro.txt', 
//                 dobro.toString(),
//                 finalizar
//             )
//         }
//         console.log('C')
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
//     console.log('B')
// }
// abrirArquivo('arquivo.txt')
// console.log('A')

// Execução síncrona(bloqueante)
// Execução assíncrona(não bloqueante)

// // JavaScript Object Notation
// // João
// const pessoa_a = {
//     nome: 'João',
//     idade: 17
// }

// console.log(pessoa_a.nome)
// console.log(pessoa_a.idade)
// console.log(pessoa_a['nome'])
// console.log(pessoa_a['idade'])

// // Maria
// const pessoa_b = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua ABC',
//         numero: 200,
//         bairro: 'Vila J.'
//     }
// }

// console.log(pessoa_b.endereco.logradouro)

// // Concessionária
// const concessionaria = {
//     nome: 'Concessionária 1',
//     cnpj: '00.000.000/0001-00',
//     endereco: {
//         logradouro: 'Rua ABC',
//         numero: 42,
//         bairro: 'Vila J.',
//         cidade: 'São Paulo',
//         estado: 'SP'
//     },
//     estoque: [
//         {
//             placa: 'QWERTY',
//             marca: 'BMW',
//             modelo: 'X1',
//             status: 'estoque'
//         },
//         {
//             placa: 'ASDFGH',
//             marca: 'Chevrolet',
//             modelo: 'Onix',
//             status: 'estoque'
//         },
//         {
//             placa: 'ZXCVBN',
//             marca: 'Audi',
//             modelo: 'A3',
//             status: 'vendido'
//         }
//     ]
// }

// console.log(concessionaria.estoque[0].modelo)

// // Calculadora
// const calculadora = {
//     marca: 'YO',
//     modelo: 'Y-900',
//     operacoes: {
//         somar: (a, b) => a + b,
//         subtrair: function(a,b) {return a - b}
//     }
// }

// for(let operacao of Object.keys(calculadora.operacoes)){
//     console.log(`${operacao}: ${calculadora.operacoes[operacao](2, 3)}`)
// }

// function eAgora(){
//   let cont = 1
//   function f1(){
//     console.log(++cont)
//   }
//   cont++
//   function f2(){
//     console.log(cont++)
//     return cont
//   }
//   cont++
//   return {f1, f2}
// }

// const res = eAgora()
// res.f1()
// console.log(res.f2())

// function saudacoesFactory(saudacao, nome){
//   return function(){
//     console.log(`${saudacao}, ${nome}`)
//   }
// }

// const oiJoao = saudacoesFactory('Oi', 'João')
// const tchauJoao = saudacoesFactory('Tchau', 'João')
// oiJoao()
// tchauJoao()


// function f(){
//   let nome = 'João'
//   function g(){
//     console.log(nome)
//   }
//   return g
// }
// const resultadoDaF = f()
// resultadoDaF()

// function f(funcao){
//   console.log('f')
//   return funcao()
// }

// function g(){
//   console.log('g')
//   function outraFuncao(){
//     console.log('Fui criada por g')
//     return () => "a"
//   }
//   return outraFuncao
// }
// console.log(f(g)()())

// //closures
// let umaFuncao = function(){
//   console.log('Fui armazenada em uma variável')
//   return () => console.log('oi')
// }
// umaFuncao()()

// function f(funcao){
//   console.log(funcao)
//   funcao()
// }
// f(umaFuncao())

// class Pessoa{
//   public void andar(){

//   }
//   var teste = andar;
// }
// const a = 1
// const f = b => b + 1
// f(1)
// const f2 = () => 1

//arrow functions
// const ehPar = n => {
//   n % 2 === 0
// }
// console.log(ehPar(5))
// const triplo = (n) => {
//   console.log(n)
//   return 3 * n
// }
// console.log(triplo(10))
// const dobro = v => v * 2
// console.log(dobro(5))
// const f5 = a => 1
// console.log(f5())
// const f4 = (a, b) => a + b
// console.log(f4(2, 3))
// const f3 = a => console.log(a)
// f3(1)
// const f2 = () => console.log('oi')
// f2()
// const f1 = a => {console.log(a)}
// f1(1)
// () => {}

// //funções
// //functions
// //arrow functions
// const triplo = function(n = 5){
//   return 3 * n
// }
// console.log(triplo(10))
// console.log(triplo())
// const dobro = function(n){
//   return 2 * n
// }
// console.log(dobro(5))
// function somar(a, b){
//   return a + b
// }
// const res = somar(2, 3)
// console.log(res)
// function hello(){
//   console.log('Hello')
// }
// hello()

// function hello(nome){
//   console.log(`Hello, ${nome}`)  
// }
// hello('Ana')

//vetores, listas, coleções
// v2 = [2, "abc", true]
// for(let i = 0; i < v2.length; i++)
//   console.log(v2[i])
// v1 = []
// console.log(v1.length)
// v1[0] = 5
// console.log(v1)
// console.log(v1.length)
// v1[10] = "abc"
// console.log(v1.length)
// console.log(v1)
//comparação
//== ou ===
// console.log([] == [])
// console.log([] == false)
//null: representa a inexistência de um objeto
//undefined: não está definido
// console.log(null == undefined)
// console.log(null == null)
// console.log([1] == 1)
// console.log(true == 1)
// console.log(1 === '1')
// console.log(1 === 1)
// console.log(1 == '1')
// console.log(1 == 1)
//coerção
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log(n3)
// const n4 = n1 + Number(n2)
// console.log(n4)

//tipos
// lista = []
// List <String> lista = new ArrayList<>();
// let nome = "Ana"
// console.log(typeof(nome))
// nome = 2
// console.log(typeof(nome))
// nome.falar()
// String nome = "Ana";
// nome = 1;
// nome.falar();
//declarando variáveis e constantes
// let idade = 19
// console.log(`Oi, ${nome}`)
// if(idade >= 18){
//   //hoist: içamento
//   let nome = 'João'
//   console.log(`${nome} pode dirigir`)
// }
// console.log(`Até mais, ${nome}`)
// var linguagem = 'Javascript'
// console.log(`Aprendendo ${linguagem}`)
// var linguagem = 'Java'
// console.log(`Aprendendo ${linguagem}`)
// var c = 2
// console.log(c)
// c = 3
// console.log(c)
// let a = 2
// a = a + 1
// console.log(a)
//var, const e let
// const nome = 'José'
// const sobrenome = "Silva"
// //interpolação
// console.log(`${nome} ${sobrenome}`)
//concatenação
// console.log(nome + " " + sobrenome)
//nome = 'José da Silva'