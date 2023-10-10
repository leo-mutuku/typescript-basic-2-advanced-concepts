console.log("Hi there!")

/********
 * 
 * 03 tsc complier
 * 
 * ******** */
// run tsc .\src\02-typescript-complier.ts


/******
 * 
 * 03 EMMITING ERRORS
 * 
 * ******* */
// greeter function
// function greet(person, date) {
//     console.log(`Hello ${person}, today is ${date}!`);
//    }
//    greet("leo");


/*************
 * *****
 *  04 EXPLICIT TYPE CHECKING
 * 
 */

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
   }
   
//    greet("Leo", Date());
   // Argument of type 'string' is not assignable to parameter of type
   // 'Date'.
   // Argument of type 'string' is not assignable to parameter of type 'Date'.

   greet("leo", new Date());


   /**********
    * 
    * 
    * 05 DOWNLEVELLING
    * 
    * ********* */

//    `Hello ${person}, today is ${date.toDateString()}!`
//    "Hello " + person + ", today is " + date.toDateString() + "!";



/***********
 * 
 * 
 * 06 STRICTNESS
 * 
 * 
 * However, using any often defeats the purpose of using TypeScript in the first place. The more
 * typed your program is, the more validation and tooling you'll get, meaning you'll run into fewer
 * bugs as you code. Turning on the noImplicitAny flag will issue an error on any variables whose
 * type is implicitly inferred as any .
 * 
 * 
 * configure strictness at tscongfig.ts the two main you should take note are noImplicitAny and strictNullChecks
 * By default, values like null and undefined are assignable to any other type. This can make 
 * writing some code easier, but forgetting to handle null and undefined is the cause of countless
 * bugs in the world - some consider it a billion dollar mistake! The strictNullChecks flag makes
 * handling null and undefined more explicit, and spares us from worrying about whether we
 * forgot to handle null and undefined .
 * ************* */

