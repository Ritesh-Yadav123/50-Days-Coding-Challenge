arr=document.getElementById("arrayDisplay");
arrayDisplayPlace=document.getElementById("arrayDisplay")

(function(){
    array=prompt("Enter the arrays elements separted by ',' ");
    arr.innerHTML=array.split(",").join();
})();

console.log(array[3])
console.log(type(array))
