// in this example we are going to see use of strict mode
//1. in this keyword
//2. in getters and setters
'use strict'

 console.log("hi", this) // here this is at global scope ; so this=window

 function functionalScope(){
     console.log("hello", this) //now this is inside functionalScope  this != window
                        // but now still you'll see in console of your brwsr that this=window
                        //which is wrong ; so how to avoid this 
                        //using strict mode 
                    }

functionalScope()