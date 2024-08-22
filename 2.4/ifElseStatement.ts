/*
1. Chocolate Raspberries 7.89
2. Peanut Butter Cups 2.99
3. Rice Krispy Treats 2.99
4. Thin mint balls 4.99
5. CR && RKT 9
6. PB && TMB 5
*/

function sweetsShop (chocolateRaspberry: boolean, peanutButterCups: boolean, riceKrispy: boolean, thinMintBalls: boolean): any {
    if(chocolateRaspberry) return ' $7.89'; 
    if(thinMintBalls) return ' $4.99'; 
    if (peanutButterCups || riceKrispy) return ' $2.99';
    if(chocolateRaspberry && riceKrispy) return ' $9.00'; 
    return 0
}; 
console.log('should give me 7.89', sweetsShop(true, false, false,false)); 
console.log(sweetsShop(true, false, true, false)); 
console.log(sweetsShop(false, true, false, true))
console.log(sweetsShop(false, false, false, true))
console.log(sweetsShop(false,true,false,false))

function takeOrder(ticket: string) : string {
    if(ticket == 'Combo Meal One') {
        return "6.45"; 
    }else if (ticket == "Combo Meal Two") {
        return '7.35'; 
    }else if (ticket == "Combo Meal Three") {
        return '6.56'; 
    } else {
        return `We do not carry ${ticket}`; 
    }; 
}; 
console.log(takeOrder("Combo Meal One")); 
console.log(takeOrder("Combo Meal Three")); 
console.log(takeOrder("Combo Meal 1000")); 
