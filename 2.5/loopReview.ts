var desserts: Array<string> = [
    "Brownie", 
    "Cheese Cake", 
    "Ice Cream", 
    "Birthday Cake", 
    "Pie", 
    "Cookies", 
    "Tarts"
]; 

for (let i = 0; i < desserts.length; i++) {
    console.log(`My favorite dessert is ${i + 1}: ${desserts[i]}`); 
}; 

desserts.forEach((sweets) => {
    console.log(`This is the best ${sweets} I've ever had.`); 
}); 