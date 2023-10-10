/******
 * 
 * Object types
 * javascript value property
 * to define an object we list its property and value types
 * ******* */



//  The parameter's type annotation is an object type
function printCoordnate(pt:{x:number, y:number}){
    console.log("The x coordinate is : " + pt.x)
    console.log("The y coordinate is : " + pt.y)
}



// optinal property
// add ? after the property name to make it an optinal proprty 

// function
function printName(obj: {first:string, last?:string}){
    // logic
}


//Both ok
printName({first:"Alice"})
printName({first:"Alice", last:'Mike'})

// In javascript you will get undefined rather than a runtime when you access 
// a property that doesn't exist.


// access an optinal property

function printName2(obj:{firstName:string, lastName?:string}){
    //console.log(obj.lastName.toLocaleLowerCase())
    // object is possibly undefined

    // a safe alternative using modern javascript
    console.log(obj.lastName?.toLocaleLowerCase())
}



