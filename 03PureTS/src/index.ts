//console.log("Typescript is Here");

//now do tsc -w, this will run ts in watchmode and create index.js in dist folder.

//Classes in Typescript
/* Typescript is Object oriented JS. TS supports object-oriented programming features like classes, interfaces, etc. A class in terms of OOPs is a blueprint for creating objects. A class encapsulates data for the object. */

// class User {
//   email : string
//   name : string
//   readonly city : string = "new york"
//   constructor(email: string, name: string){
//     this.email = email;
//     this.name = name;
//   }
// }

// const udai = new User("ud@ud.com", "udc");
//this you cannot do, because we using readonly.and we already defined it with new york.
//udai.city = ""

//Member Visibility
// -- public
// the default visibility of class memebers is public. A public member can be accessed anywhere.

class Greeter {
  public greet(){
    console.log("Hi");
  }
}
const g = new Greeter();
g.greet();

// -- protected
// protected members are only visible to subclasses of the class they're declared in.

// in javascript #name is also way to declare the protected variable

class Greeter1{
  public greet(){
    console.log("Hello " + this.getName());
  }
  protected getName() {
    return "Udai";
  }
}
class SpecialGreeter extends Greeter1 {
  public howdy(){
    console.log("Howdy, "+ this.getName());
  }
}
const g1 = new SpecialGreeter();
g1.greet();
//g1.getName(); -- property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.

// --private
//private is like protected, but doesnt allow to the member even from sub classes:

class Base {
  private x =0;
}

const b = new Base();
//console.log(b.x) -- Property 'x' is private and only accessible within class 'Base'.

class Derived extends Base{
  showX(){
    //console.log(this.x)  -- this also give error i.e., property 'x' is private and only accessible within class 'Base'.
  }
}

//Getter and Setter 
/* Actually, getters and setters are nothinh but a way for you to provide access to th properties of an object.

-- Methods of the TS accessor property:
- getter: this method comes when you want to access any property of an object. A getter is also called and accessor

- setter : this method comes when you want to change any propert of an object. A setter is also known as a mutator.
*/

class Student {
  private _name : string = "Udai Chauhan";
  private _email : string = "";
  private _job : string = "";

  public get name(){
    return this._name;
  }
}
let stud = new Student();
let value = stud.name;
console.log(value);

//we can observe that when we invoke the getter method (stud.name), we didnot include the open and close paratheses as we would with a regular function. Thus you access varibales directly.

//Setter Method : for updating the value of a variable the setter accessor property is the conventional method which is used. They are denoted by a set keyword in a object literal.
// Also rember there is NO type for setter method. NO VOID no nothing.

class Student1 {
  private _name : string = "Udai";
  private _job : string = "";
  private _email: string = "";

  public get name(){
    return this._name;
  }
  public get job(){
    return this._job;
  }
  public get email(){
    return this._email;
  }
  
  public set job(thejob: string){
    this._job = thejob;
  }

  public set email(theEmail: string){
    this._email = theEmail;
  }
}
let stud1 = new Student1();

stud1.job = "SDE 2";
stud1.email = "ud@ud.com";

//Handle Error 
// You can also add a condition in the setter methdd and if the condition is invalid then it throws an error.

class Student2{
  private _name : string = "";
  private _semseter1: number = 7;
  private _course1: string = "";

  public set semsete(thesem1: number){
    if(thesem1 < 1 || thesem1 > 8){
      throw new Error(
        'sorry, this course in not valid')
      }
      this._semseter1 = thesem1;
    }
}
let stud2 = new Student2();
stud2.semsete = 9; //this will throw the error.

//Constructor
//Actually, there is no difference in using or not using constructor in a class to access getter or setter method, but we just want to give overlook of constructor in TS.

class Student3 {
  private _name: string;
  _course: string;

  constructor(name: string, course: string) {
    this._name = name;
    this._course = course;
  }

  public get name(): string {
    return this._name;
  }

  public get course(): string {
    return this._course;
  }

  public set course(theCourse: string) {
    this._course = theCourse;
  }
}

let stud3 = new Student3("Udai", "Frontend Development");
stud3.course = "DSA";
console.log("Course of Student is " + stud3.course); 
//output will be - Course of Student is DSA