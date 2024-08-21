describe("Testing Variables", () => {
    test("Testing Strings", () => {
        var stringOne: string = "Hello world."; 
        var stringTwo: string = "Hello world."; 
        var stringThree: string = "Howdy Y'all"; 
        expect(stringOne).toEqual(stringTwo); 
        expect(stringOne).not.toEqual(stringThree); 
        expect(stringThree).not.toContain(stringOne); 
    })
})