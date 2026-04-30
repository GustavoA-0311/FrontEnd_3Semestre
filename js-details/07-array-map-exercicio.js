const numeros = [
    50,
    200,
    250,
    800,
    992.87,
    300,
    500,
    9876,
    99,
    134
];

//Rodar o map gerando um novo array com o dobro dos números do original
//após, exiba os valores do array dobro no console utilizando o foreach

console.log(`Array original: ${numeros}`);
//Usando o map
const dobroNumeros = numeros.map((dobro)=>{
    return dobro * 2;
});
console.log(dobroNumeros);

console.log(`Array modificado: `)
console.log();

//usando o foreach
let textoResulatado = "";
dobroNumeros.forEach((num)=>{
    textoResulatado += `${num} | `;//acumula texto em cada string ( sem pular linha)
});

//remover o último pipe


// str.substring(0,str.length - 1);
textoResulatado = textoResulatado.substring(0, textoResulatado.length -3);
console.log(textoResulatado);//mostra o texto completo
