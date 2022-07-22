// Desafio 1

 class employee  {
    constructor(public code: number, public name: string){
     this.code = code;
     this.name = name;
    }
 }
 const employ = new employee(10,'John');
 console.log(` Código:${employ.code}  Nome:${employ.name}`)


// Desafio 2
 type pessoa = {
     nome: string;
     idade: number;
     profissao: string;
 };

 const pessoa1: pessoa = {
     nome: 'maria',
     idade: 29,
     profissao: 'Atriz'

 };
 console.log('Nome', pessoa1.nome);
 console.log('Idade', pessoa1.idade);
 console.log('Profissão', pessoa1.profissao);

 const pessoa2: pessoa = {
     nome: 'Roberto',
     idade: 19,
     profissao: 'Padeiro'
 }
 console.log('Nome', pessoa2.nome);
 console.log('Idade', pessoa2.idade);
 console.log('Profissão', pessoa2.profissao);

 const pessoa3 = {
     nome: "laura",
     idade: "32",
     profissao: "Atriz"
 };
 console.log('Nome', pessoa3.nome);
 console.log('Idade', pessoa3.idade);
 console.log('Profissão', pessoa3.profissao);


 let pessoa4: pessoa = {
     nome: "carlos",
     idade: 19,
     profissao: "padeiro"
 }
 console.log('Nome', pessoa4.nome);
 console.log('Idade', pessoa4.idade);
 console.log('Profissão', pessoa4.profissao);


// Desafio 3


let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLDivElement;

var total = 0;
function somarAoSaldo(soma: number) {
    campoSaldo.textContent = '';
    total += soma;
    total <= 1 ? campoSaldo.textContent += total + ' Real' : campoSaldo.textContent += total + ' Reais';
}

function limparSaldo() {
    campoSaldo.textContent = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));

    soma.value = '';
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

// Desafio 4
// Não fiz, ia demandar muito tempo, deixar pra uma outra hora, fazer com calma.
