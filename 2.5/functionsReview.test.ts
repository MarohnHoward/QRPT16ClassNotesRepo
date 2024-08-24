function gameGiver(game: string) : any {
    if(game == 'Red Dead Redemption 2') {
        return 59.99; 
    } else if (game == 'Mario Party') {
        return 49.99; 
    } else if (game == 'Star Dew Valley') {
        return 19.99; 
    } else if (game == 'Forza 5') {
        return 49.99; 
    } else {
        return `We do not have ${game}`; 
    }; 
}; 

it('should give us the price for all the games', () => {
    expect(gameGiver('Red Dead Redemption 2')).toBe(59.99); 
    expect(gameGiver('Mario Party')).toBe(49.99); 
    expect(gameGiver('Star Dew Valley')).toBe(19.99); 
    expect(gameGiver('Forza 5')).toBe(49.99); 
    expect(gameGiver('Mario Kart')).toBe('We do not have Mario Kart'); 
}); 

function movieDiscount(movieMeb: boolean, senior: boolean, milOrEmt: boolean) {
    if(movieMeb && senior && milOrEmt) return 0.40; 
    if((movieMeb && senior) || (movieMeb && milOrEmt)) return 0.35; 
    if(senior || milOrEmt) return 0.15; 
    if(movieMeb) return 0.10; 
    return 0; 
}; 

it('should give the correct discounts', () => {
    console.log(movieDiscount(true,true,false)); 
    expect(movieDiscount(true,true,true)).toBe(0.40); 
    expect(movieDiscount(true,true,false)).toBe(0.35); 
    expect(movieDiscount(true, false, true)).toBe(0.35); 
    expect(movieDiscount(false,false,true)).toBe(0.15); 
    expect(movieDiscount(true, false,false)).toBe(0.10); 
    expect(movieDiscount(false,false,false)).toBe(0); 
}); 