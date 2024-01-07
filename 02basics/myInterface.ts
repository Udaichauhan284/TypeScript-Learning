//TypeScript Type Aliases and Interfaces
//TypeScript allows types to be defined separately from the variables that use them,
//Aliases and Interface allows types to be easily shared between different variables/objects.

//Type Aliases
/* Type Aliases allow defining types with a custom name (an Alias).
Type Aliases can be used for primitives like "striing" or more complex types such as "objects" and "arrays".
*/
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year : CarYear,
  type : CarType,
  model : CarModel
}

const carYear : CarYear = 1966
const carType : CarType = "Ford"
const carModel : CarModel = "Mustang"

const car : Car = {
  year : carYear,
  type : carType,
  model : carModel
};

//Interfaces
//Interfaces are similar to type aliases, except they only apply to object types.

interface Rectangle {
  height : number,
  width : number
}
//re-opening of interface
interface Rectangle {
  color : string
}
//extending
interface Shape extends Rectangle {
  shapeForm : string,
  shapeColor : string,
}

const rectangle: Rectangle = {
  height : 20,
  width : 30,
  color : "red"
};