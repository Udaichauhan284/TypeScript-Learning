const User = {
  name: "udai",
  email : "udai@gmail.com",
  isActive : true
}

function createUser({name: string, isPaid: boolean}){

}

createUser({name: "rock", isPaid: false});

//function name: return type (object) { } defination
function createCourse():{name: string, price : number}{
  return {name: "Typescript", price:  399}
}

//Creating own type
type User = {
  name : string;
  email : string;
  isActive : boolean;
}

function createUser1(user: User){
  console.log("Creating our own data type");
}
createUser1({name : "ud", email : "ud@ud.com", isActive: true});

//Readonly
type USER = {
  readonly _id: string,
  name: string,
  email: string,
  isActive: boolean,
  //? oprional
  cardDetails?: number
}
export {}