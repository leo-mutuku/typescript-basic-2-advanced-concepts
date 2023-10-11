/*****
 * 
 * 
 * Enums
 * Enums are a feature added to JavaScript
 *  by TypeScript which allows for describing a value which 
 * could be one of a set of possible named 
 * constants.
 * ****** */


// Less Common Primitives
// It's worth mentioning the rest of the primitives in JavaScript which are represented in the type
// system. Though we will not go into depth here.
// bigint
// From ES2020 onwards, there is a primitive in JavaScript used for very large integers, BigInt :
// You can learn more about BigInt in the TypeScript 3.2 release notes.
// symbol
// There is a primitive in JavaScript used to create a globally unique reference via the function
// Symbol() :
// You can learn more about them in Symbols reference page.


function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
    return " ".repeat(padding) + input;
    }
    return padding + input;
   }

   function padLeft1(padding: number | string, input: string) {
    if (typeof padding === "number") {
    return " ".repeat(padding) + input;
   // (parameter) padding: number
    }
    return padding + input;
//(parameter) padding: string
   }