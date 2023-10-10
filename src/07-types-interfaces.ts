/*****
 * 
 * Interface decaration is another way to 
 * an obk=ject type
 * 
 * ***** */

interface Point1 {
    x:number;
    y:number;
}

function printCoord1(pt:Point1){
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord1({x:100, y:100})


// types aliases vs interfaces

// 01 
// Extending an interface
// Extending a type via intersections

//02
interface Animal {
    name: string
}

type Animal1 = {
    name:string
}

//03

// interface
interface bear extends Animal {
    honey:boolean
}

//type
type bear1 = Animal1 & {
    honey:boolean
}

//04

// const bear = getbear()
// bear.name
// bear.honey


function getbear() {
    throw new Error("Function not implemented.");
}

