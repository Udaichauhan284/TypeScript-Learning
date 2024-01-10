/* Type narrowing in TS refers to the process of refining the type of a variable within a certain block of code, based on certain conditions or checks. This helps TS understand more specific types of variables, providing better type information and enabling safer code.*/

function logLengthOrValue(input: string | number) {
  //Type narrowing or Type graud
  if (typeof input === "string") {
    console.log("Length of the string: ", input.length);
  } else {
    console.log("Value of the number:", input);
  }
}
logLengthOrValue("Hellow");
logLengthOrValue(42);

//The in operator narrowing
interface User {
  name: string;
  email: string;
}
interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}
function isAdminAccount(account: User | Admin) {
  //in operator
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

//instanceof Narrowing
//This operator checks if an object is an instance of a particular class or constructor function, allowing you to narrow down the type within a conditional block.

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toLocaleDateString());
  } else {
    console.log(x.toUpperCase());
  }
}

//type predicates are a way to inform the complier about the type of a variable within a certain code block. Type predicates use a speical syntax to assert that a variable is of a specific type. This assertion helps Typescript narrow down the type of a variable, providing more accurate type informationa and enabling safer code.
type Fish = {swin: () => void};
type Bird = {fly: () => void};

function isFish(pet : Fish | Bird): pet is Fish{
  return (pet as Fish).swin !== undefined;
}

function getFood(pet : Fish | Bird){
  if(isFish(pet)){
    pet 
    return "Fish Food";
  }else{
    pet 
    return "Bird Food";
  }
}

//Discrimented Union
//It is a TS feature that enables the creation of a type that can represent several different possibilities or varints. By attaching discriminators to each variant.
//use of kind
interface Cricle{
  kind : "circle",
  radius : number
}
interface Square {
  kind : "square",
  side: number
}
interface Rectangle{
  kind : "rectanle",
  length : number;
  width : number
}

type Shape = Cricle | Square | Rectangle;

function getTrueShape(shape: Shape){
  if(shape.kind === "circle"){
    return Math.PI * shape.radius ** 2;
  }
  //return shape.side * shape.side;
}

function getArea(shape: Shape){
  switch(shape.kind){
    case "circle":
      return Math.PI * shape.radius **2
    case "square":
      return shape.side * shape.side
    case "rectanle":
      return shape.length * shape.width;
    default:
      //never use for default
      const _defaultForShape : never = shape;
      return _defaultForShape;
  }
}