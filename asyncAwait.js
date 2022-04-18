//asyncawait is nothing but a syntatical sugar
//code to khubsurat and easy to read bnane k liye


//step1 async lagana ; toh async toh function pe lagate hai
//toh yeh hint h ki sare fetch wale code ko function me daalo

function fetchKrBhai(){

//step 2 paste the 1st then() wala code and with fetch reqst offcourse

    fetch('https://api.coinpaprika.com/v1/coins/btc-bitcoin', {})

    .then(function(response){ //here we are accepting data from api call and storing it in respone
        console.log('Entered Then')
        return response.json();  // now we are just formatting data into json format
    })



}



fetchKrBhai()