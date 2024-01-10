//Generics
/* Generics offer a way to ccreate reusable components. Generics provide a way to make components work with any data type and not restrict to one data type. So, components can be called or used with a variety of data types. Generics in TS is almost similar to C# generics.

Gemerics uses the type variable <T>, a special kind of varibale that denotes types. The type variable remembers the type that the user provides and works with that particular type only. This is called preserving the type information.
*/

const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number{
  return val;
}

//using any - not recommended
function identityTwo(val: any): any {
  return val;
}

//using Generics
function identityThree<Type>(val: Type): Type{
  return val;
}
identityThree(3); //this is also fine
identityThree("udai"); //this is also fine

//short way
function identityFour<T>(val: T): T{
  return val;
}

//interface
interface Bootle{
  brand : string,
  type: string,
}
identityFour<Bootle>({brand: "milton", type: "steel"});

function getSearchProducts<T>(products: T[]): T {
  const myIndex = 3;
  return products[myIndex];
}

//arrow functions
const getMoreProducts = <T>(products: T[]): T => {
  const myIndex = 4;
  return products[myIndex];
}

//most people write like this <T,> use this comma , defined that this is generics code, not any other JSX.

interface Database{
  connection : string,
  username: string,
  password: string
}
function anotherFunction<T, U extends Database>(valOne:T, valTwo:U) {
  return {valOne, valTwo};
}

interface Quiz{
  name: string,
  type: string
}

interface Course{
  name: string,
  author: string,
  subject: string
}
class Sellable<T>{
  public cart: T[] = []

  addToCart(product: T){
    this.cart.push(product);
  }
}