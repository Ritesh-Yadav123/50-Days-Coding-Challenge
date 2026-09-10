function launchGame() {
    console.log("Launching The Game");

    const userInput = prompt("Enter your options : ");
    if(userInput===null){
        console.log("Game Cancelled...")
        return;
    }
    let input = userInput.toLowerCase();
    console.log("you have choosen : ", input)

    let option = Math.floor(Math.random() * 3 + 1);
    // console.log(option)

    let computerChoice;

    switch (option) {
        case 1:
            computerChoice = "scissor";
            break;
        case 2:
            computerChoice = "rock";
            break;
        case 3:
            computerChoice = "paper";
    }

    console.log("computer choosen ", computerChoice)

    let result = "";

    if (
        input !== "rock" &&
        input !== "paper" &&
        input !== "scissor"
    ) {
        result = "Invalid input! Choose rock, paper, or scissor.";
    }
    else if (input === computerChoice) {
        result = "Tie";
    }
    else if (
        (input === "rock" && computerChoice === "scissor") ||
        (input === "paper" && computerChoice === "rock") ||
        (input === "scissor" && computerChoice === "paper")
    ) {
        result = "You Won!";
    }
    else {
        result = "Computer Won!";
    }

    console.log(result);
}



// const askUser=window.confirm("Do you want to play again ");

// if(askUser){
//     launchGame();
// }
// else{
//     console.log("Bye Bye... ")
// }


do {
    launchGame();
}
while(confirm("Do you want to play again..."));

console.log("Bye Bye... see you next time ");