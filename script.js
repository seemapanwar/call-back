
function compute(num){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>resolve(num-1),1000);
    });
}
compute(11).then((value)=>
{
    console.log(value);
    return compute(value);
}).then((value)=>{
    console.log(value);
    return compute(value);
}).then((value)=>{
    console.log(value);
    return compute(value);
}).then((value)=>{
    console.log(value);
    return compute(value);
}).then((value)=>{
    console.log(value);
    return compute(value);
}).then((value)=>{
    console.log(value);
    return compute(value);
}).then((value)=>{
    console.log(value);
    return compute(value);
}).then((value)=>{
    console.log(value);
    return compute(value);
}).then((value)=>{
    console.log(value);
    return compute(value);
}).then((value)=>{
    console.log(value);
    return compute(value);
}).then((value)=>{
    console.log("Happy Indepedence Day");
    return compute(value);
}).catch((error)=>{
    console.log(error);
});
