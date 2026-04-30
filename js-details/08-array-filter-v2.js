const estoque = [
    {
        descricao : "Camisa Polo",
        cor : "Verde",
        preco : 49.99,
        perfil : "M",
        quantidade : 10,
        promocao : false
    },

    {
        descricao : "Camisa Polo",
        cor : "Amerela",
        preco : 49.99,
        perfil : "F",
        quantidade : 15,
        promocao : true
    },

    {
        descricao : "Camisa Polo",
        cor : "Azul",
        preco : 49.99,
        perfil : "M",
        quantidade : 100,
        promocao : true
    },

    {
        descricao : "Camisa Polo",
        cor : "Roxa",
        preco : 49.99,
        perfil : "F",
        quantidade : 5,
        promocao : false
    },

];



// const camisetasFemininas = estoque.filter ((camiseta) => {
//     return camiseta.perfil == "F";

// });

// console.log(camisetasFemininas);

let qndPromocao = 0;
const produtosPromocao = estoque.filter ((p) => {
    if(p.promocao == true) {
        qndPromocao == p.quantidade;
    }
    return p.promocao == "true";
});


console.log(`Quantidade de produtos em programocao ${qndPromocao}`);
console.log(produtosPromocao);