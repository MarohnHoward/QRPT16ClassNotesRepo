class Employee {
    id: number; 
    name: string; 
    phone: number; 
    email: string; 
    //all of the above are now required in order ot use the Employee class outside of the {}
    // to use the class outside of the {} we need a constructor
    constructor(id:number, name:string, phone:number, email:string) {
        this.id = id; 
        this.name = name; 
        this.phone = phone; 
        this.email = email; 
    }; 
}; 

let firstEmployee = new Employee(
    1, 
    'Ahsoka Tano', 
    8018675309, 
    'bestpadawanever@mylightsabersarecoolerthanyours.com'
); 

let secondEmployee = new Employee(
    2, 
    'Obi Wan Kanobi',
    8018018018, 
    'itsoverankin@ihavethehighground.com'
); 
console.log(firstEmployee); 
console.log(secondEmployee); 

let interns: Array<Employee> = [
    new Employee(3, 'Anakin Skywalker', 2012121212, 'ihatesand@itsroughandcourseandgetseverywhere.com'), 
    new Employee(4,'Darth Vader', 5465845654, 'luke@iamyourfather.com'),
    new Employee(5, 'Chewbacca', 8456231232, 'argggggggggggh@arahhh.com'),
    new Employee(6, 'Han Solo', 7896541231, 'iknow@frozen.com')
]; 

interns.forEach((intern) => {
    console.log(`new intern info ${intern.id} ${intern.name} ${intern.phone} ${intern.email}`); 
});  