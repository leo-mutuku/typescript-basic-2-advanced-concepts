
/**********
 * 
 * 01 STARTIC TYPE CHECKING  typeError
 * 
 * Static types systems describe the shapes and behaviors of what our values 
 * will be when we run our programs. A type-checker like TypeScript uses that information 
 * and tells us when things might be going off the rails.
 * ***** */


// Accessing the property 'toLowerCase'
// on 'message' and then calling it
const message = 'hi there!'
console.log(message.toLowerCase())
// Calling 'message'
//message();


// Is message callable?
// Does it have a property called toLowerCase on it?
// If it does, is toLowerCase even callable?
// If both of these values are callable, what do they return?


// TypeError message is not a function



// function fn(x) {
//     return x.flip();
//    }


// function fn(x: { flip: () => any; }) {
//     return x.flip();
//    }



/*****
 * 
 * 02 NON EXCEPTION FAIL
 * JavaScript gives us different behavior
 * and returns the value undefined :
 * 
 * ***** */


const user = {
    name:"leo",
    email:"le.mutuku@gmail.com"
}

//user.name
//user.phone
// Property 'phone' does not exist on type '{ name: string; email:
//string



// typos

// How quickly can you spot the typos?
// message.toLocaleLowercase();
// message.toLocalLowerCase();

// We probably meant to write this...
// message.toLocaleLowerCase();

// uncalled functions

// function flipCoin() {
//     //Meant to be Math.random()
//     return Math.random < 0.5;

//    Operator '<' cannot be applied to types '() => number' and 'number'.
//    }


// basic logic errors

// const value = Math.random() < 0.5 ? "a" : "b";
// if (value !== "a") {
//  // ...
// } else if (value === "b") {
// This condition will always return 'false' since the types '"a"' and
// '"b"' have no overlap.
 // Oops, unreachable
// }