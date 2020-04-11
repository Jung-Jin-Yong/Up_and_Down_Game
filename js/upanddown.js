var randomNum=Math.floor(Math.random()*100);
var inputBtn=document.querySelector("#check");
var resetBtn=document.querySelector("#reset");
var count=0;

inputBtn.addEventListener("click",checkNumber);
resetBtn.addEventListener("click",resetNumber);

function checkNumber(){
    var textInput=document.querySelector("#try").value;
    var resultOutput=document.querySelector("#display");

    if(textInput>randomNum){
        resultOutput.innerHTML="DOWN";
    } else if(textInput<randomNum){
        resultOutput.innerHTML="UP";
    } else{
        resultOutput.innerHTML="맞힘";
    }
    counterNumber();
}

function resetNumber(){
    textInput=0;
    document.querySelector("#display").innerHTML="";
    document.querySelector("#try").value="";
    document.querySelector("#try").focus();
    
}

function counterNumber(){
    count++;
    document.querySelector("#counter").innerHTML=`${count}회`;
}