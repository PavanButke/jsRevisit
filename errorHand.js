//lets learn Error handling on Promisified api calls


fetch('https://api.coinpaprika/v1/coins/btc-bitcoin', {})

.then(function(response){ //here we are accepting data from api call and storing it in respone
    console.log('Entered Then')
    return response.json();  // now we are just formatting data into json format
})
.then( function(data){ // whatever data we got in json form is stored in data
    console.log(data)
},
function(err){
    alert("Kaam Nhi Bana");
    console.log(err)
})

// you can see chaining is happening the 2nd then works on promise returned by 1st then , it would not be working on promise returned by fetch
// now lets see how can we can we handle errors
//chalo lets assume that above fetch api url is incorrect and does not return any response
// abhi we want ke user should know about that simply let's add Alert()



// Abhi the most interesting thing is ki what do you think which is base promise to run this err
// you must be saying if 2nd wala then gets failed then this will be running
// now there is trick , what if say link is incorrect ; toh what would say , do js needs
// to travel through 1st then() 2nd then() and uske baad then(err) wala no,
//the moment api link gets failed ,in fetch ; fetch would immediately be assigned to nearest then with fun(err)
// I hope you got clarity now
