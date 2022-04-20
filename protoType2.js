const pappu = {
    silence(){
        console.log("Aapke jo "+this.designation+" wo "+this.kaam+" ka kaam karte hain")
    }
}

function chaiWala( kaam , designation)
{
    this.kaam = kaam;
    this.designation = designation; 
    //silence()  call yaha pr hona chahiye tha 
}

//abhi what we can do iss , we need to use prototype() method on our chaiWala function method

chaiWala.prototype = pappu;


const aap = new chaiWala('Kichdi wale' , 'dilli ka bijli wala')
aap.silence(); //isse kaam nhi bnega kyuki yaha pr koi connection nhi h in-b/w pappu() and chaiwala
                // there must be connection within chaiWala() 
