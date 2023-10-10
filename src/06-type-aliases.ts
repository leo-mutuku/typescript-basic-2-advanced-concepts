/*****
 * 
 * type Aliases
 * apart from direct type annotation
 * type aliases is simply using the same type more
 * than once and refer them by a single name
 * ******* */

type Point = {
    x:number,
    y:number
};

function PrintCoord(pt:Point){
    console.log("The coordinate's x value is " + pt.x)
    console.log("The cordinate's y value  is " + pt.y)
}

//ok
printCoord({x:100, y:100})

// case 2 to give a name to any type
type ID = number | string

type UserInputSanitizedString = string;
function sanitizeInput(str: string): UserInputSanitizedString {
 return sanitize(str);
}
// Create a sanitized input
let userInput = sanitizeInput(getInput());
// Can still be re-assigned with a string though
userInput = "new input";

function sanitize(str: string): string {
    throw new Error("Function not implemented.");
}
function getInput(): string {
    throw new Error("Function not implemented.");
}

