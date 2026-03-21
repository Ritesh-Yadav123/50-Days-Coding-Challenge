arr=document.getElementById("arrayDisplay");

(function(){
    array=prompt("Enter the arrays elements separted by ',' ");
    arr.innerHTML=array.split(",").join();
})();
