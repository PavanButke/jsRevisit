//lets learn Error handling on Promisified api calls


fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {})

.then(function(response){ //here we are accepting data from api call and storing it in respone
    console.log('Entered Then')
    return response.json();  // now we are just formatting data into json format
})
.then( function(data){ // whatever data we got in json form is stored in data
    console.log(data)
})
.catch(
    function(err){
        console.log(err);
    }
)
// you can see chaining is happening the 2nd then works on promise returned by 1st then , it would not be working on promise returned by fetch
// now lets see how can we can we handle errors
//chalo lets assume that above fetch api url is incorrect and does not return any response
// abhi we want ke user should know about that simply let's add Alert()

//catch bohot simple hai , if you all then() to be executed then put catch() at the end of function
//otherwise jaha pr rokna hai waha
