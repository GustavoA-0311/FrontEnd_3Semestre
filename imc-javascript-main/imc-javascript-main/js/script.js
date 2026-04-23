function calcular(){
    const nome = document.getElementById("Nome").value;
    const altura = document.getElementById("atura").value;
    const peso = document.getElementById("peso").value;


console.log(nome);
console.log(altura);
console.log(peso);

if (nome.trim().length == 0   ||
    altura.trim().length == 0   ||
    peso.trim().length == 0  ){
    alert("Preencher todos o campos");
    return false;
}
}