
function closureTest(myName){

    return function(){
        // console.log(myName)

        setTimeout(function(){

            console.log(myName)
        }, 1000)
            myName=('Peppi')

    }
}

const greetMe = closureTest('Pavan')
const greetHer = closureTest('Peppi')
greetMe()