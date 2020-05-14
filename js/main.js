
function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar() {
    window.open("https://br.linkedin.com/company/globallabs");
    //window.location.href = "https://br.linkedin.com/company/globallabs";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

/*
function soma(n1, n2) {
    return n1 + n2;
}

var validar = 0;
function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validaIdade(idade));


function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

var count;
for(count = 1; count <= 5; count++)  {
    alert(count);
}

var count = 0;
while (count <= 5) {
    alert(count);
    count++;
    //count = count + 1;
}

var idade = prompt("Qual sua idade");
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
}

var frutas = [{nome:"maça",cor:"vermelha"},{nome:"uva",cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);

var fruta = {nome:"maça",cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
console.log(lista.toString()[0]);
console.log(lista.length);
console.log(lista.reverse());
alert(lista[1]);


var nome = "Thales Silva";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem idade " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());

alert(frase.replace("Japão", "Brasil"))
*/