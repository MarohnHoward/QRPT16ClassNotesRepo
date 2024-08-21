//makeAMeal = Function name; Order = Parameter name; 
function makeAMeal(order:string): string {
    return order + " $15.00"; 
}; 
function makeBreakfast(breakfastItems: string): string {
    return breakfastItems + "part of this nutritious breakfast"; 
}; 
//call the makeAMeal Function
let firstMeal = makeAMeal("Burger, Fries, Coke"); 
let secondMeal = makeAMeal('Chicken Nuggets, Onion Rings, Sprite'); 
//call the makeBreakfast
let breakfastOne = makeBreakfast("Pancakes, Bacon, Orange Juice"); 
let breakfastTwo = makeBreakfast("Eggs, Hashbrowns, Coffee"); 

//console.log so that the strings print in the terminal
console.log(firstMeal); 
console.log(secondMeal); 
console.log(breakfastOne); 
console.log(breakfastTwo); 
console.log(`Can you make me some ${breakfastOne}`); 
console.log(makeBreakfast("Waffles,Sausage, Tea "));

function foodStore(foodItems: string): any {
    if (foodItems == 'Peach') {
        return .99; 
    } else if (foodItems == 'Orange') {
       return .75; 
    } else if (foodItems == 'Bread') {
        return 2.99; 
    } else {
        return "We don't have that try somewhere else!"
    }
}
console.log(foodStore('Peach')); 
console.log(foodStore('Orange')); 
console.log(foodStore('Bread')); 
console.log(foodStore('Chocolate')); 