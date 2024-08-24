it('can tell the difference in numbers', () => {
    //Variables 
    const small: number = 5; 
    var greaterOrEqual: number = 5; 
    let big: number = 1234567; 
    //Assertions
    expect(small).toBeLessThan(big); 
    expect(greaterOrEqual).toBeGreaterThanOrEqual(small); 
    expect(big).not.toBeLessThan(small); 
}); 

it('includes parts of the variable', () => {
    const hello: string = 'Hello Class'; 
    const sentence: string = 'I am tired of Hello World'; 
    const helloTwo: string = 'Hello World'; 

    expect(hello.includes('howdy')).toBeFalsy(); 
    expect(sentence.includes('Hello World')).toBeTruthy(); 
    expect(sentence.includes(helloTwo)).toBeTruthy(); 
}); 

it('compares properly', () => {
    const numberOne: number = 3.14159; 
    const numberTwo: number = 3.14; 
    const stringOne: string = "Howdy"; 
    const stringTwo: string = "Howdy"; 
    const numberFail: string = "3.14"; 

    expect(numberTwo).toBeCloseTo(numberOne); 
    expect(numberOne).not.toEqual(numberTwo); 
    expect(stringOne).toStrictEqual(stringTwo); 
    expect(numberFail).not.toStrictEqual(numberTwo); 
    expect(numberFail).not.toContain(numberTwo); 
})
