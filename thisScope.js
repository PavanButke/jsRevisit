// lets see scope changes made on this

//step1 this ko globally set krdete h

this.favFood = "kachodi"

function kyaKhaoge(){
    console.log('Bhaiya 2 '+this.favFood +' lagana')
    //step2 function me globally declared var ko this ki help se access kiya which is valid 
}

//step3 Ebb aagya tricky part hum bnayenge ek object
//aur uss object k basis pe call krenge function defined above

let foodieMei={
        
        khilao:kyaKhaoge
}
//step 4 krenge function call on object

foodieMei.khilao(); // this will not work it'll give undefined

// kyaKhaoge()
