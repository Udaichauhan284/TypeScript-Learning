//Tuples : it represent a heterogeneous collection of value. In other words, tupple enable strong multiple fields of diff types. Tuples can also be passed as paramenters to functions.

//maintain the order also
let tUser : [string, number, boolean];
tUser = ["udai", 34, true];

let rgb: [number, number, number] = [255, 123, 122];

type User = [number, string];
const newUser: User = [112, "ud@gmail.com"];

//Enum

//this const will help that, JS will not generate long code, it will generate simple code. so in future we can edit and make some changes.
const enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}
const mySeat = SeatChoice.AISLE; 