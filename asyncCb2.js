let maa = taanaa => console.log(` Thodi pdhai krle bs dinbhr ${taanaa}`)

let meraDailyRoutine = (subah , sham ,  callback)=>{

    const dinbhar = `${subah} ${sham} aur reapeat`;

    callback(dinbhar);
}


meraDailyRoutine('Khana' , 'Sona' , maa)