
/*******
 * 
 *Union types 
 * allow you to be build types from existing, 
 * usually by combining them
 ********** */

 function printId (id:number | string){
    console.log("Your ID is: " + id)
 }

 // ok
 printId(101)
 //ok
 printId("201")
 //Error
 //printId({myID:232})
// Argument of type `{myID:number} ` is not assignable to parameter 
//of type 'string | number'


// working with union type
// typescript will only allow an operation if it's valid for every 
// member of the union

function printID1(id:number| string){
   // console.log(id.toLowerCase())
   // property 'toLowercase ' does not exist on type 'string | number'
   //property 'toLowerCase ' does not exist on type 'number'
}


//solution for the above case will be to narrow down the union with 
// code

function printId2(id: string| number){
    if(typeof id ==="string"){
        // in this case id is of type string
        console.log(id.toLowerCase())
    }
    else{
        // here, id is of type number
        console.log(id)
    }

}

//case2 working with union types
function welcomePeople(x:string[] | string){
    if(Array.isArray(x)){
        console.log("Hello, " + x.join(" and "));

    }else{
        console.log("welcome lone traveler " + x)
    }
}

// case 3 where member have a property in common

function getFirstThree(x:number[] | string){
    return x.slice(0,3)
}