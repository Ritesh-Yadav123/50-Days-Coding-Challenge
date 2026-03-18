numberInput=document.getElementById("numberInput");
Armstrong=document.getElementById("Armstrong");
reverse=document.getElementById("reverse");
Palindrome=document.getElementById("Palindrome");
resultDiv=document.getElementById("result");
factorial=document.getElementById("factorial");
prime=document.getElementById("prime");
fibonacci=document.getElementById("fibonacci");
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
