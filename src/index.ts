//                              ----arrays----
// let numbers: number[] = [1, 2, 3];

//------------------------------------------------------

//                              ----tuple----
//fixed length array with each element having a particular type, 
//most useful when having 2 values like key value pairs

//let user: [number, string] = [1, "Mosh"];

//-------------------------------------------------------

//                             ----Enums----

// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase - camelCase

const enum Size {Small = 1, Medium, Large};
let mySize: Size = Size.Medium;
console.log(mySize); 
