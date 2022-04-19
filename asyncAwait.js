//sbse pehle import krlo fetch ko
import fetch from 'node-fetch'
 globalThis.fetch = fetch

//asyncawait is nothing but a syntatical sugar
//code to khubsurat and easy to read bnane k liye


//step1 async lagana ; toh async toh function pe lagate hai
//toh yeh hint h ki sare fetch wale code ko function me daalo

async function fetchKrBhai(){

//step 2 paste the 1st then() wala code and with fetch reqst offcourse

let respone = await fetch('https://api.coinpaprika.com/v1/coins/btc-bitcoin', {})

//Ebb krenge modify taau
//.then() ko krdiya saaf , pr response ko to kahi na kahi store
//krna pdega toh response variable bnadiya , usi me h sab api ka khajana

        //here we are accepting data from api call and storing it in respone
        //function ko krdiya saaf 
        console.log('Entered Then')
        const data = await response.json();  // now we are just formatting data into json format
        
        console.log(data)
     
}



fetchKrBhai()