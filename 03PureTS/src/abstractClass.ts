//Abstract classes are like a mixture of implementing interfaces and extending a class in one step. You can create a class with optional methods and properties, but also indicate which method ans properties must be implemented in the derived class. Note that your class, despite enforcing abstract rules, is still able to itself implementt any interface you desire.

// use the "abstract" keyword indicate a class contains "abstract" methods or properties.

//Abstract classes are mainly for inheritance where other classes may derive from them. We cannot create an instance of an abtract class.

abstract class Person{
  abstract name: string;

  display(): void{
    console.log(this.name);
  }
}
class Employee extends Person{
  name: string;
  empCode: number;

  constructor(name:string, code:number){
    super();
    this.empCode = code;
    this.name = name;
  }
}
let emp : Person = new Employee("James", 101);
emp.display(); //james