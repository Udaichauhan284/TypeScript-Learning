let score : number | string = 33
score = 44;
score = "56";

//both will be okay, because we are using UNION

//own type also use as Union

type User = {
  name : string
  id: number
}

type Admin = {
  username : string 
  id: number
}

let myUser : User | Admin = {name: "udai", id: 728};

myUser = {username: "ud", id: 456}

function getMyId(id: number | string){
  if(typeof id === "string"){
    id.toLowerCase();
  }
}

//array

//const data: number[] | string[] = ["udai", 1]
//this will give you a error, if you want both string and number in array

//you can do like this

const mixData : (string | number)[] = ["udai", 1, "chauhan", 3, 5];

//strict allotement
let seatAllotment : 'aisle' | 'middle' | 'window';
seatAllotment = 'aisle'  //okay
//seatAllotment = "crew" //not okay