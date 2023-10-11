/*******
 * 
 * Type Assertion
 * when you known the type of value that 
 * typpescript can't know about
 *  used to specify as more specific type |
 *  a less specific version of a type
 * ******* */

// case 1
// some kind of HTMLElement, but you know 
//the type will be of HTMLCanvasElement

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement
//type assertions are removed by complier and won't affect the runtime 
// behavior of your code

// you can also you angle bracket annotation
const myCanvas1 = <HTMLCanvasElement> document.getElementById("main_canvas")


//Notes
// sometimes this rule can too conservertive and will disallow more complex 
// corcians that might be valid. if this happens. you can use two assertions,
/// first to any (or unknown)

// const a = (expr as any) as T;