//step3 : create a new class now try to access object from , this newly created class
class dharm {
        politics(){
            console.log('Jaat Paat Dangae fassad');
        }
}

//step1 :- let's start with creating a class
class PM extends dharm{ // not only we need to use super but also use extends ; extends use tells from which class we have to inherit props
    constructor(kaam){
        //step4 : to resolve the issue we have super() keyword
        super(); // super executes the constructor function of dharm i.e. parent class
        this.work = kaam;
    }
    //step2: create a construction ; which will create objects

}

const moodi = new PM("Corruption");
console.log(moodi)
moodi.politics(); // will this work ..no it will not work we are getting Uncaught
                // instead of that it should have printed 'Hindu Muslim Dangey'

