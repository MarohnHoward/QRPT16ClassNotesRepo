var myPerson = {
    firstName: 'John',
    lastName: "Doe",
    age: 125
}; 

console.log(myPerson); 
console.log(`Employee Info: ${myPerson.firstName} ${myPerson.lastName} ${myPerson.age}`); 

var iceCreamFlavor: Array<string> = [
    "Mint Chocolate Chip",
    "Pumpkin Ice Cream", 
    "Strawberry Mascarpone",
    "Caramel", 
    "Cookie Dough"
]; 

iceCreamFlavor.forEach((flavor, i) => {
    console.log(`${i + 1}. ${flavor}`); 
}); 

var people = [
    {
        first: "Arthur",
        last: "Morgan", 
        age: 35
    }, 
    {
        first: "John", 
        last: "Marston",
        age: 26
    },
    {
        first: 'Sadie', 
        last: 'Adler', 
        age: 25
    }
]; 

people.forEach((person) => {
    console.log(person); 
}); 

var peopleWithIceCream = {
    first: 'Sadie', 
    last: 'Adler', 
    age: 25, 
    favoriteIC: [
     "Mint Chocolate Chip",
    "Pumpkin Ice Cream", 
    "Strawberry Mascarpone",
    "Caramel", 
    "Cookie Dough"
    ]
}; 

peopleWithIceCream.favoriteIC.forEach((flavor) => {
    console.log(`${peopleWithIceCream.first} ${peopleWithIceCream.last} loves ${flavor} ice cream!`)
})

class Animal {
    name: string; 
    sound: string; 
    habitat: string; 
    constructor(name:string, sound:string, habitat: string) {
        this.name = name; 
        this.sound = sound; 
        this.habitat = habitat; 
    }; 
}; 

let firstAnimal = new Animal("Lion", "Roars", "Savanah"); 
let secondAnimal = new Animal('Dog', "Barks", "Backyard"); 
let thirdAnimal = new Animal('Cat', 'Meow', "Anywhere you dont want them"); 

console.log(firstAnimal, secondAnimal, thirdAnimal); 