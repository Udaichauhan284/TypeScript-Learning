//console.log("Typescript is Here");

//now do tsc -w, this will run ts in watchmode and create index.js in dist folder.

//Classes in Typescript
/* Typescript is Object oriented JS. TS supports object-oriented programming features like classes, interfaces, etc. A class in terms of OOPs is a blueprint for creating objects. A class encapsulates data for the object. */

class User {
  email : string
  name : string
  readonly city : string = "new york"
  constructor(email: string, name: string){
    this.email = email;
    this.name = name;
  }
}

const udai = new User("ud@ud.com", "udc");
//this you cannot do, because we using readonly.and we already defined it with new york.
//udai.city = ""