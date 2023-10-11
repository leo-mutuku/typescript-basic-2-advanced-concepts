
function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
    for (const s of strs) {
   //Object is possibly 'null'.
    console.log(s);
    }
    } else if (typeof strs === "string") {
    console.log(strs);
    } else {
    // do nothing
    }
   }
   

   //Truthiness narrowing

//    In JavaScript, we can use any expression in conditionals, && s, || s, if statements, Boolean
// negations ( ! ), and more. As an example, if statements don't expect their condition to always
// have the type boolean .
// In JavaScript, constructs like if first "coerce" their conditions to boolean s to make sense of them,
// and then choose their branches depending on whether the result is true or false . Values like
// 0
// NaN
// "" (the empty string)
// 0n (the bigint version of zero)
// null
// undefined
// all coerce to false , and other values get coerced true . You can always coerce values to
// boolean s by running them through the Boolean function, or by using the shorter doubleBoolean negation. (The latter has the advantage that TypeScript infers a narrow literal boolean type
// true , while inferring the first as type boolean .)
// It's fairly popular to leverage this behavior, especially for guarding against values like null or
// undefined . As an example, let's try using it for our printAll function.
function getUsersOnlineMessage(numUsersOnline: number) {
 if (numUsersOnline) {
 return `There are ${numUsersOnline} online now!`;
 }
 return "Nobody's here. :(";
}


function printAll1(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
    for (const s of strs) {
    console.log(s);
    }
    } else if (typeof strs === "string") {
    console.log(strs);
    }
   }


   function printAll2(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    // DON'T DO THIS!
    // KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
    if (typeof strs === "object") {
    for (const s of strs) {
    console.log(s);
    }
    } else if (typeof strs === "string") {
    console.log(strs);
    }
    }
   }


   function multiplyAll(
    values: number[] | undefined,
    factor: number
   ): number[] | undefined {
    if (!values) {
    return values;
    } else {
    return values.map((x) => x * factor);
    }
   }


  // Equity narrowing
  function example(x: string | number, y: string | boolean) {
    if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
   // (method) String.toUpperCase(): string
    y.toLowerCase();
   // (method) String.toLowerCase(): string
    } else {
    console.log(x);
    //(parameter) x: string | number
    console.log(y);
    //(parameter) y: string | boolean
    }
   }


   function printAll4(strs: string | string[] | null) {
    if (strs !== null) {
    if (typeof strs === "object") {
    for (const s of strs) {
   // (parameter) strs: string[]
    console.log(s);
    }
    } else if (typeof strs === "string") {
    console.log(strs);
   // (parameter) strs: string
    }
    }
   }
   

   interface Container {
    value: number | null | undefined;
   }
   function multiplyValue(container: Container, factor: number) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) {
    console.log(container.value);
    //(property) Container.value: number
    // Now we can safely multiply 'container.value'.
    container.value *= factor;
    }
   }



   // the in operator narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };
function move(animal: Fish | Bird) {
 if ("swim" in animal) {
 return animal.swim();
 }
 return animal.fly();
}


type Fish1 = { swim: () => void };
type Bird1 = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
function move1(animal1: Fish1 | Bird1 | Human) {
 if ("swim" in animal1) {
 animal1;
 //(parameter) animal: Fish1 | Human
 } else {
 animal1;
 //(parameter) animal: Bird1 | Human
 }
}


// instance of narrowing
function logValue(x: Date | string) {
    if (x instanceof Date) {
    console.log(x.toUTCString());
    //(parameter) x: Date
    } else {
    console.log(x.toUpperCase());
   // (parameter) x: string
    }
   }

   // assignment
// let x = Math.random() < 0.5 ? 10 : "hello world!";
//  let x: string | number
// x = 1;
// console.log(x);
//  let x: number
//  x = "goodbye!";
// console.log(x);
//  let x: string


//using type predicates
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
   }
   
// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();
if (isFish(pet)) {
 pet.swim();
} else {
    pet.fly();
   }
function getSmallPet() {
        throw new Error("Function not implemented.");
    }


 const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()]
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
 if (pet.name === "sharkey") return false;
 return isFish(pet);
});


// descrimainating unions


interface Shape {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
   }
   
   function handleShape(shape: Shape) {
    // oops!
    if (shape.kind === "rect") {
//    This condition will always return 'false' since the types '"circle" |
//    "square"' and '"rect"' have no overlap.
    // ...
    }
   }
   

   //exclusivititness  never

type Shape = Circle | Square;
function getArea(shape: Shape) {
 switch (shape.kind) {
 case "circle":
 return Math.PI * shape.radius ** 2;
 case "square":
 return shape.sideLength ** 2;
 default:
 const _exhaustiveCheck: never = shape;
 return _exhaustiveCheck;
 }
}