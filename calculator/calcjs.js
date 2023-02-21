function calc(a){
    // var x;
    // var y;
    // var res;
    // if (a!='+'){
    //     x=a;
    // }
    if (a=='e'){
        var res = store().replace(new RegExp("[a-wA-W]","gm"),"");
    }
    // store()=null;
    store("");

if(res.includes("+")){
    // for sum 
    const sumarr = res.split("+");
    // alert(sumarr);
    let sum=parseInt(0);
    for (let i in  sumarr){
        // let x=parseInt(i);
        // alert(i);
        sum=sum+parseInt(sumarr[i]);

    }
    document.getElementById("result").innerHTML+=`${sum}`;
}


else if(res.includes("-")){
    // for minus 
    const diffarr = res.split("-");
    let diff=diffarr[0];
    for (let i in  diffarr){
        if (i>0){
        diff-=parseInt(diffarr[i]);
    }
    }
    document.getElementById("result").innerHTML+=diff;


}

else if(res.includes("x")){
//for multiplication
    const mularr = res.split("x");
    let mul=1;
    for (let i in  mularr){
        mul*=parseInt(mularr[i]);

    }
    document.getElementById("result").innerHTML+=mul;

}
// for division
else if (res.includes("/")){
    const divarr = res.split("/");
    let div=1;
    for (let i in  divarr){
        div/=parseInt(divarr[i]);

    }
    document.getElementById("result").innerHTML+=div;

}

else{
    alert("wrong input");
    document.getElementById("result").innerHTML="Result: Wrong input";

}


}
// var a=null;
document.getElementById("screen").value="";
function store(arg2){
    if (arg2!=""){
        document.getElementById("screen").value+=arg2;
    }else{
        document.getElementById("screen").value="";
    }
    // a=a+arg2;
    if (arg2!="" && arg2!=undefined ){
    document.getElementById("screen").innerHTML+=arg2;
    }
    if(arg2=='c'){
        document.getElementById("result").innerHTML="Result:";
        document.getElementById("screen").innerHTML="";
        return (null);


    }
    // alert(a);
    return (document.getElementById("screen").value);

    

}
function clickbtn(){
document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    document.getElementById(name).style.backgroundColor="green";
    setTimeout(10);
    document.getElementById(name).style.backgroundColor="aqua";

    // Alert the key name and key code on keydown
    // alert(name);1
  }, false);
}