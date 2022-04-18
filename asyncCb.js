setTimeout(function(){
   console.log('Time-Bomb Exploded')
}, 1500)

console.log("Print it quick , before it explodes")

callbackeTest( 7, 6, function(res){
    console.log(res , " min baki h ")
})

function callbackeTest( val1, val2 , callback){
    const answer= val1+val2;
    callback(answer)
}