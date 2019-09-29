"use strict";

// var nameVar = "Fuck";
// var nameVar = "Mike";
// console.log("nameVar", nameVar);

// let nameLet = "Jen";
// nameLet = "Julie";
// console.log("nameLet", nameLet);

// const nameConst = "Gunther";

// console.log("nameConst", nameConst);

// function getPetName() {
//   var petName = "Hal";
//   return petName;
// }
// const petName = getPetName();
// console.log(petName);

//Block scoping

var fullName = "Nelson Mandela";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
