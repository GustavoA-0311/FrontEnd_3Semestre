const hobbies = [
"correr",
"Nadar",
"Jogar bola",
"Viajar",
"lutar",
"Conversar muito",
"ler Livro",
"Malhar na academia",
"Maratonar Series",
"Dormir",
"Jogar Basquete"
];

const novosHobbies = hobbies.map((hob) => {
return `<p>${hob}</p>`;
});

console.log(novosHobbies);