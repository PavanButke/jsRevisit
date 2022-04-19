// in this example we are going to see use of strict mode
//1. in this keyword
//2. in getters and setters
// 'use strict'

//  console.log("hi", this) // here this is at global scope ; so this=window

//  function functionalScope(){
//      console.log("hello", this) //now this is inside functionalScope  this != window
//                         // but now still you'll see in console of your brwsr that this=window
//                         //which is wrong ; so how to avoid this 
//                         //using strict mode 
//                     }

// functionalScope()

//silent failure in getters and setters

let keyValPair ={
    a:200,
    b:0,

    //getter function likhte - getter mtlb read only function , just a fancy name

    get koisafun(){
        return this.b
    },

    set koisaSet(_value){
        this.b = _value //  ideally it should give error but as you can see there is no error
    }                   // to avoid this we use strict mode
}


keyValPair.koisafun = -100