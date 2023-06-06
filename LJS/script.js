var salarioAtual = 5079;
if (salarioAtual < 500) {
    console.log("Salário reajustado:",(salarioAtual * (15 / 100) + salarioAtual))
}   else if (salarioAtual > 500  && salarioAtual < 1000) {
    console.log("Salário reajustado:",(salarioAtual * (10 / 100) + salarioAtual))
}   else if (salarioAtual > 1000) {
    console.log("Salário reajustado:",(salarioAtual * (5 / 100) + salarioAtual))
}

var nota1 = 9;
var nota2 = 9;
let media = (nota1 + nota2) / 2;
if (media >= 7 && media < 10) {
    console.log("Aprovado, com média", media)
}   else if (media < 7) {
    console.log("Reprovado, com média", media)
}   else if (media == 10){
    console.log("Aprovado com distincão, parabéns")
}   else {
    console.log("Tem algo errado")
};

var numero1 = 13;
var numero2 = 16;
var numero3 = 12;

var maiorNumero = Math.max(numero1,numero2,numero3)
console.log(maiorNumero)

var diaSemana = 7;
if (diaSemana == 1) {
    console.log(diaSema7a, "Domingo")
} else if (diaSemana == 2) {
    console.log(diaSema7a, "Segunda")
} else if (diaSemana == 3) {
    console.log(diaSema7a, "Terça")
} else if (diaSemana == 4) {
    console.log(diaSema7a, "Quarta")
} else if (diaSemana == 5) {
    console.log(diaSema7a, "Quinta")
} else if (diaSemana == 6) {
    console.log(diaSema7a, "Sexta")
} else if (diaSemana == 7) {
    console.log(diaSemana, "Sabado")
} else {
    console.log("Digite um número de 1 a 7")
}


function triangulo(lado1,lado2,lado3){

var soma1 = lado1 + lado2 >= lado3
var soma2 = lado2 + lado3 >= lado1
var soma3 = lado1 + lado3 >= lado2
console.log(soma1)
if (soma1 && soma2 && soma3) {
    console.log("Pode ser um triangulo")
    if (lado1 == lado2 && lado3 == lado2) {
        console.log("Triangulo equilatero")
    
}   else if (lado1 == lado2 || lado3 == lado2 || lado1 == lado3) {
    console.log("Triangulo Isóceles")
}   else if (lado1 != lado2 && lado3 != lado2 && lado1 != lado3) {
    console.log("Triangulo Escaleno")}  
}   else {
    console.log("Não é possivel construir um triangulo com as medidas dispostas")
}}



const form = document.querySelector("#form")
form.addEventListener('submit',function(event){
    event.preventDefault()
    const preco1 = document.querySelector("#preco1").value;
    const preco2 = document.querySelector("#preco2").value;
    const preco3 = document.querySelector("#preco3").value;
    var menor = Math.min(preco1,preco2,preco3)
    console.log(menor)

})



function fibo(numeroMax){
var lista = [1,1];
var i = lista.length;
while (i < numeroMax){
    var i = lista.length;
    var u1 = lista[lista.length - 1] 
    var u2 = lista[lista.length - 2]
    var n = u1 + u2
    lista.push(n)
    
}
var ultimo = lista[lista.length -1]
send(ultimo,"#fiboResp")
console.log(lista)}


function fibo2(maximo){
    var lista = [1,1];
    var i = lista.length;
    while (lista[lista.length - 1] < maximo){
        var i = lista.length;
        var u1 = lista[lista.length - 1]
        var u2 = lista[lista.length - 2]
        var n = u1 + u2
        lista.push(n)
        
    }
    var ultimo = lista[lista.length -1]
    send(ultimo, "#fibo2Resp")
    console.log(lista)}
 

function login(uNome, uSenha) {
    if (uSenha == uNome) {
    console.log("Senha e usuário não podem ser iguais.")
}   else if (uSenha.length < 5 || uSenha.length > 12){
    console.log("Sua senha deve ter entre 5 e 12 carácteres.")}
    else {console.log("Cadastro concuído com sucesso!")}
}

function fato(x) {
    lista2=  []    
    for (var item = 1;item <= x; item++){
        lista2.push(item)
    }
    lista2.reverse()
    console.log(lista2)
    lista1 = [1,2]
    while (lista1.length < x) {
        var i1 = lista1[lista1.length -1]
        var i2 = lista2[lista2.length -3]
        lista2.pop()
        var multi = i1*i2
        lista1.push(multi)
        
    }
    var ultimo = lista1[lista1.length -1]
    console.log(lista1)
    send(ultimo, "#fatoResp")
}

const fatoForm = document.querySelector("#fatoForm");
fatoForm.addEventListener('submit',function(event){
    event.preventDefault()
    const fatoValue = document.querySelector("#fatoValue").value;
    fato(fatoValue)
})

const fiboForm = document.querySelector("#fiboForm");
fiboForm.addEventListener('submit',function(event){
    event.preventDefault()
    const fiboValue = document.querySelector("#fiboValue").value;
    fibo(fiboValue)
})

const fibo2Form = document.querySelector("#fibo2Form");
fibo2Form.addEventListener('submit',function(event){
    event.preventDefault()
    const fibo2Value = document.querySelector("#fibo2Value").value;
    fibo2(fibo2Value)
})


function send(resposta, id) {
    document.querySelector(id).innerHTML = resposta
}
