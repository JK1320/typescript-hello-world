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

// const enum Size {Small = 1, Medium, Large};
// let mySize: Size = Size.Medium;
// console.log(mySize); 

//----------------------------------------------------------

//                          ----Functions----
// enable these 3:  "noUnusedLocals": true, "noUnusedParameters": true,  "noImplicitReturns": true,


//function calculateTax(income: number, taxYear = 2022): number{
    
//     if (taxYear < 2022)
//     return income * 1.2;
//     return income * 1.3;
// }

// calculateTax(10_000);

//---------------------------------------------------------------

//                          ----Objects----
//                          --- Type Aliases--- 
// type Employee = {
//     readonly id: number,
//      name: string,
//      retire: (date: Date) => void
// }

// let employee: Employee = {
//     id: 1, 
//     name: 'Mosh',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// };

//----------------------------------------------------------------

//                  ----Union types----

//function kgToLbs(weight: number  | string): number{

// Narrowing a union type to more specific type

// if (typeof weight === 'number')
//     return weight * 2.2;
//     else 
//     return parseInt(weight) * 2.2;

// };

// kgToLbs(10);
// kgToLbs("10kg")

//-------------------------------------------------------------------------------------

//                  ----Intersection types----

// type Draggable = {
//     drag: () => void
// };

// type Resizable = {
// resize: () => void
// }

// // By using intersection;  above 2 types can be combined to one

// type UIWidget = Draggable & Resizable; // intersection type

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
}

//-----------------------------------------------------------------------------------

//                      ----Literals Types---- (exact or specific value)

type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

//------------------------------------------------------------------------------------
