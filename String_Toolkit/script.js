let countWord = document.getElementById("countWords");
let reverseString = document.getElementById("reverseString");
let toUpperCaseBtn = document.getElementById("toUpperCase");
let toLowerCaseBtn = document.getElementById("toLowerCase");
let removeSpaces = document.getElementById("removeSpaces");
let capitalizeWords = document.getElementById("capitalizeWords");
let clearText = document.getElementById("clearText");
let inputString = document.getElementById("textInput");

let result = document.getElementById("result");

inputString.addEventListener("input", function() {
     result.innerHTML="you entered: " + inputString.value;
});

inputString.addEventListener("focus", function() {
     result.innerHTML="we are focus";
});

inputString.addEventListener("blur", function() {
    result.innerHTML="We have finished";
});

countWord.addEventListener('click',countWordcheck)
function countWordcheck(){
     let text=inputString.value.trim();
     if(text==""){
          result.innerHTML="Please enter a string";
     }
     result.innerHTML=text.length;
}

reverseString.addEventListener('click',reverseStringcheck);
function reverseStringcheck(){
     let text=inputString.value.trim();
     result.innerHTML="";
     for(let i=text.length-1;i>=0;i--){
          result.innerHTML+=text[i];
     }
}

toUpperCaseBtn.addEventListener('click',toUpperCasecheck);
function toUpperCasecheck(){
     let text=inputString.value.trim();
     result.innerHTML=text.toUpperCase();
}


toLowerCaseBtn.addEventListener('click',toLowerCasecheck);
function toLowerCasecheck(){
     let text=inputString.value.trim();
     result.innerHTML=text.toLowerCase();
}

clearText.addEventListener('click',resetString);
function resetString(){
     let text=inputString.value.trim();
     result.innerHTML="";
}