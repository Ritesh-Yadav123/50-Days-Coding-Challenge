numberInput=document.getElementById("numberInput");
Armstrong=document.getElementById("Armstrong");
reverse=document.getElementById("reverse");
Palindrome=document.getElementById("Palindrome");
resultDiv=document.getElementById("result");
factorial=document.getElementById("Factorial");
prime=document.getElementById("Prime");
fibonacciBtn=document.getElementById("Fibonacci");
evenOddbtn=document.getElementById("Even/Odd");

result=document.querySelector("#result");

evenOddbtn.addEventListener("click",evenOdd);

function evenOdd(){
    let n=numberInput.value;
    if(n%2==0){
        result.innerHTML="EVEN";
    }
    else{       
         result.innerHTML="ODD";
    }
}



Armstrong.addEventListener("click",armSrong);
function armSrong(){
    let num=numberInput.value;
    let sum=0;
    // let temp=n;
    // n=n.toString();
    let n=num.toString().length;
    while(num>0){
        sum+=Math.pow(num%10,n);
        num=Math.floor(num/10);
    }
    if(sum===parseInt(numberInput.value)){
        result.innerHTML="Armstrong Number";
    }
    else{
        result.innerHTML="Not an Armstrong Number";
    }
}

reverse.addEventListener('click',reverseString);
function reverseString(){
    let str=numberInput.value.toString();
    let reversedStr="";
    for(let i=str.length-1; i>=0; i--){
        reversedStr+=str[i];
    }
    result.innerHTML=reversedStr;
}


factorial.addEventListener("click",facto);
function facto(){
    given=numberInput.value;

    if(given==0 || given==1){
        result.innerHTML="1";
        return; 
    }
    else{
        let fact=1;
        for(let i=2; i<=given; i++){
            fact*=i;
        }
        result.innerHTML=fact;
    }
}

Palindrome.addEventListener("click",palindromeCheck);
function palindromeCheck(){
    num=numberInput.value.toString();
    num_reverse=num.split('').reverse().join('');
    if(num==num_reverse){
        result.innerHTML="Palindrome";
    }
    else{
        result.innerHTML="NOT palindrome";
    }
}

prime.addEventListener('click',checkPrime);
function checkPrime(){
    let num=numberInput.value;
    isPrime=true;
    if(num<0 || num==1){
        isPrime=false;
    }
    else{
        for(let i=2; i<=num/2; i++){
            if(num%i==0){
                isPrime=false;
                break;
            }
        }
    }
    if(isPrime){
        result.innerHTML="Primer Number ✅";
    }
    else{
        result.innerHTML="Not Prime Number ❌";
    }
}


fibonacciBtn.addEventListener("click",fibonacci);

function fibonacci(){
    let n=numberInput.value;
    let a=0; 
    let b=1;
    let series="";
    for(let i=0; i<n; i++){
        series+=a+",";
        let next=a+b;
        a=b; 
        b=next;
    }
    result.innerHTML=series.slice(0, -1);
} 