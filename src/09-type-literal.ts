/******
 * 
 * type literals
 * a variable that has only one value
 *  string literal / number literials
 * ******* */


let changingString = "Hello there!"
changingString = "Hi there!"
// Because changingstring can represent any possible 
// string that how type script describes it the type system

const anotherChangingString = "Hello world!"
//because  anotherChangingString can only represnt 1 possible string it has a 
//literal type represntation

// by themeselves literal aren't very valuable

let x: "hello" = "hello";
// OK
x = "hello";
// ...
// x = "howdy";
// Type '"howdy"' is not assignable to type '"hello"'.

// combining literal

function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
   }
   printText("Hello, world", "left");
//    printText("G'day, mate", "centre");
//    Argument of type '"centre"' is not assignable to parameter of type
//    '"left" | "right" | "center"


// numeric
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
   }

   interface Options {
    width: number;
   }
   function configure(x: Options | "auto") {
    // ...
   }
   configure({ width: 100 });
   configure("auto");
//    configure("automatic");
//    Argument of type '"automatic"' is not assignable to parameter of type
//    'Options | "auto"'


// There's one more kind of literal type: boolean literals. There are only two boolean literal types, and
// as you might guess, they are the types true and false . The type boolean itself is actually just
// an alias for the union true | false .


// Literal interface
// When you initialize a variable with an object, TypeScript assumes that the properties of that object
// might change values later. For example, if you wrote code like this:

const obj3 = {counter:0};
if(1===1){
        obj3.counter = 1
}

// TypeScript doesn't assume the assignment of 1 to a field which previously had 0 is an error.
// Another way of saying this is that obj.counter must have the type number , not 0 , because
// types are used to determine both reading and writing behavior.

const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
// Argument of type 'string' is not assignable to parameter of type '"GET"
// | "POST"'.
// Argument of type 'string' is not assignable to parameter of type '"GET" |
function handleRequest(url: string, method: string) {
    throw new Error("Function not implemented.");
}

// In the above example req.method is inferred to be string , not "GET" . Because code can be
// evaluated between the creation of req and the call of handleRequest which could assign a new
// string like "GUESS" to req.method , TypeScript considers this code to have an error.
// There are two ways to work around this

// Change 1:
const req1 = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req1.url, req1.method as "GET");

//You can use as const to convert the entire object to be type literals:
const req3 = { url: "https://example.com", method: "GET" } as const;
handleRequest(req3.url, req3.method);


// null and undefined
// JavaScript has two primitive values used to signal absent or uninitialized value: null and
// undefined .
// TypeScript has two corresponding types by the same names. How these types behave depends on
// whether you have the strictNullChecks option on.
// strictNullChecks off
// With strictNullChecks off, values that might be null or undefined can still be accessed
// normally, and the values null and undefined can be assigned to a property of any type. This is
// Change 1:
const req5 = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req.url, req.method as "GET");
const req6 = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
// similar to how languages without null checks (e.g. C#, Java) behave. The lack of checking for these
// values tends to be a major source of bugs; we always recommend people turn
// strictNullChecks on if it's practical to do so in their codebase.
// strictNullChecks on
// With strictNullChecks on, when a value is null or undefined , you will need to test for
// those values before using methods or properties on that value. Just like checking for undefined
// before using an optional property, we can use narrowing to check for values that might be null :

function doSomething(x: string | null) {
    if (x === null) {
    // do nothing
    } else {
    console.log("Hello, " + x.toUpperCase());
    }
   }
   


// Non-null Assertion Operator (Postfix ! )
// TypeScript also has a special syntax for removing null and undefined from a type without
// doing any explicit checking. Writing ! after any expression is effectively a type assertion that the
// value isn't null or undefined :

function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
   }