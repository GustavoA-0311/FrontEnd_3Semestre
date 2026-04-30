const numeros = [5, 10, 14, 50, 10, 900, 100, 10];

const numeroEncontrado = numeros.filter((n) => {
    return n == 10;
});


const nomes = [
    "Walyson",
    "Leticia",
    "Davi",
    "Gustavo",
    "Paulo", 
    "James",
    "Marcos",
    "Matheus"
]

pessoasLetrasLG = nomes.filter((nome) =>{
    const primeiraLetra = nome.substring(0,1);
    return primeiraLetra == "L" || primeiraLetra == "G";


});
console.log(pessoasLetrasLG);