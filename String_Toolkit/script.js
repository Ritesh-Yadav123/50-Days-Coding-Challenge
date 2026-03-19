let countWord = document.getElementById("countWords");
let reverseString = document.getElementById("reverseString");
let toUpperCaseBtn = document.getElementById("toUpperCase");
let toLowerCaseBtn = document.getElementById("toLowerCase");
let removeSpaces = document.getElementById("removeSpaces");
let capitalizeWords = document.getElementById("capitalizeWords");
let clearText = document.getElementById("clearText");
let inputString = document.getElementById("textInput");

let resutl = document.getElementById("result");

inputString.addEventListener("input", function() {
     result.innerHTML="you entered: " + inputString.value;
});

inputString.addEventListener("focus", function() {
     result.innerHTML="we are focus";
});

inputString.addEventListener("blur", function() {
    result.innerHTML="We have finished";
});