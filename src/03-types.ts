/********
 * 
 * The primitives: string , number , and boolean
 * 
 * ******* */


//ARRAY

//[1, 2, 3] 
//number[] 
//string[]
//Array<number>    -- generics // T<U>
//[number]  -- this is a different thing -- tupple



// ANY

// TypeScript also has a special type, any , that you can use whenever you don't want a particular
//value to cause typechecking errors.


let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;




/***********
 * 
 * 
 * 
 * Type Annotations on Variables
 * 
 * *********** */

let myName: string = "Leo";

//TypeScript doesn't use "types on the left"-style declarations like int x = 0; Type annotations will
//always go after the thing being typed.

// No type annotation needed -- 'myName' inferred as type 'string'
let myName1 = "Leo";


/********
 * 
 * 
 * Functions
 * Functions are the primary means of passing data around in JavaScript.
 * TypeScript allows you to
 * specify the types of both the input and output values of functions.
 * 
 * ********* */


// Parameter type annotation
function greet2(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
   }
   
// Would be a runtime error if executed!

// greet(42);
// Argument of type 'number' is not assignable to parameter of type
// 'string'.
// Argument of type 'number' is not assignable to parameter of type 'string'.


function getFavouriteNumber():number{
    return 28
}
// Much like variable type annotations, you usually don't need a return type annotation because
// TypeScript will infer the function's return type based on its return statements


/********
 * 
 * 
 * Anonymous Functions
 * Anonymous functions are a little bit different from function declarations.
 * When a function appears in a place whereTypeScript can determine how it's going to be called,
 * the parameters of that function are automatically given types.
 * 
 * ****** */ 


// const names = ["Alice", "Bob", "Eve"];
// // Contextual typing for function
// names.forEach(function (s) {
//  console.log(s.toUppercase());
// Property 'toUppercase' does not exist on type 'string'. Did you mean
// 'toUpperCase'?
// });
// // Contextual typing also applies to arrow functions
// names.forEach((s) => {
//  console.log(s.toUppercase());
// Property 'toUppercase' does not exist on type 'string'. Did you mean
// 'toUpperCase'?
// });



// objects types

// To define an object type, we
// simply list its properties and their types.


// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
   }
   printCoord({ x: 3, y: 7 });

//You can use , or ; to separate the properties, and the last separator is optional either way.


// Optional Properties
// Object types can also specify that some or all of their properties are optional. To do this, add a ?
// after the property name:

function printName(obj: { first: string; last?: string }) {
    // ...
   }
   // Both OK
   printName({ first: "Bob" });
   printName({ first: "Alice", last: "Alisson" });


//    In JavaScript, if you access a property that doesn't exist, you'll get the value undefined rather than
// a runtime error. Because of this, when you read from an optional property, you'll have to check for
// undefined before using it

function printName1(obj: { first: string; last?: string }) {
    // Error - might crash if 'obj.last' wasn't provided!
    // console.log(obj.last.toUpperCase());
   //Object is possibly 'undefined'.
    if (obj.last !== undefined) {
    // OK
    // console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
   }
   
