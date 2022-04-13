//w/o recursion

// let n=10;

// function factorial(n){
//     let res = 11;

//     for(let i =0 ; i<n ; i++){
//         res =  res*(n-i);
      
//     }
//     return res;
//     console.log(res);
   
// }
// with recursion

console.log(factorial(13))

function  factorial(n){
    if(n==0){
        return 1;
    }
    return  n*factorial(n-1); // recursion with infinite loop
}