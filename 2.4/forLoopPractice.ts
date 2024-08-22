//first make the array to loop 
var videoGames: Array<string> = [
    "Red Dead Redemption 2", 
    "Skyrim", 
    "Breath of the Wild", 
    "Starcraft 2", 
    "Animal Crossing"
]; 

for(let i = 0; i < videoGames.length; i++) {
    console.log(`Game to Play: ${i + 1}: ${videoGames[i]}`)
}; 

videoGames.forEach((game) => {
    console.log(`You should check out ${game}`); 
}); 