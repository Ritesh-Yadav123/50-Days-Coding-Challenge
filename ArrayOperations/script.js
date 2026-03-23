arrDisplay=document.getElementById("arrayDisplay");
maxiBtn=document.querySelector("#max");
miniBtn=document.querySelector("#min");
dRbutton=document.querySelector("#removeDuplicate");

let array=[];
(function(){
    input=prompt("Enter the arrays elements separted by ',' ");
    array=input.split(",").map(Number);
    arrayDisplay.innerHTML=array.join(", ");
})();


maxiBtn.addEventListener("click",maxi);
function maxi() {
    let mx = -Infinity;

    for (let x of array) {
        if (mx < x) {
            mx = x;
        }
    }

    arrayDisplay.innerHTML = mx;
}


miniBtn.addEventListener("click",mini);

function mini() {
    let mi = Infinity;

    for (let x of array) {
        if (mi > x) {  
            mi = x;
        }
    }

    arrayDisplay.innerHTML = mi;
}


dRbutton.addEventListener("click",duplicatesRem);

function duplicatesRem(){
     let removed_duplicates = [...new Set(array)];
    arrayDisplay.innerHTML = removed_duplicates.join(", ");
}



