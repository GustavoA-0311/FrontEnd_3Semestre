let frutasVermelhas = [];
let frutasCriticas = ["limao", "abacaxi", "maracujá", "tangerina", "acerola"];

frutasVermelhas.push("Morango");
frutasVermelhas.push("Maçã");
frutasVermelhas.push("Framboesa");
frutasVermelhas.push("Tomate");
frutasVermelhas.push("Cereja");


console.log(frutasVermelhas);
let fuitRemovedFromFirstArray = frutasVermelhas.shift();
console.log(`${fuitRemovedFromFirstArray} foi removido da cesta!`);
console.log(frutasVermelhas);
