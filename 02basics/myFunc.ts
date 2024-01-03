function addTwo(num: number): number{
  return num + 2;
  //this means this function only return number
}
//addTwo("5"); it will give error
//so
console.log(addTwo(5));

function signUpUser(name:string, email: string, isPaid: boolean){

}
//this will give error
// signUpUser("udai", 4, j);
//so
signUpUser("udai", "udai@gmail.com",false);

//default value
let loginUser = (name: string, email :string, isPaid: boolean = false) => {}

//sometime we need to return more than one data type
// function getUser(user : string) : string {
//   if(user){
//     return "OK";
//   }else {
//     return false;
//   }
// }
export {}