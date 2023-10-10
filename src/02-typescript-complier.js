console.log("Hi there!");
// run tsc .\src\02-typescript-complier.ts
/******
 *
 * EMMITING ERRORS
 *
 * ******* */
// greeter function
// function greet(person, date) {
//     console.log(`Hello ${person}, today is ${date}!`);
//    }
//    greet("leo");
/*************
 * *****
 *  EXPLICIT TYPE CHECKING
 *
 */
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
//    greet("Leo", Date());
// Argument of type 'string' is not assignable to parameter of type
// 'Date'.
// Argument of type 'string' is not assignable to parameter of type 'Date'.
greet("leo", new Date());
