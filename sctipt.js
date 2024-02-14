let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userS = document.querySelector("#user-score");
let compS = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        let compChoice = genrateComp ();
        playGame (userChoice,compChoice);
    })
})

let genrateComp = () => {
    let option = ["Rock", "Paper", "Scissor"];
    let optIndex = Math.floor(Math.random () * 3);
    return option[optIndex];
}

let playGame = (userChoice,compChoice) => {
    console.log("User Choice", userChoice);
    console.log("Computer Choice", compChoice);

    if(userChoice === compChoice){
        drawGame ();
    }else {
        let userWin = true;
        if(userChoice === "Rocek"){
            userWin = compChoice === "Paper" ? false : true;
        }else if (userChoice === "Paper"){
            userWin = compChoice === "Scissor" ? false : true;
        }else {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner (userWin, userChoice, compChoice);
    }
}

let drawGame = (compChoice,userChoice) => {
    console.log("Draw Game!");
    msg.innerText = `Draw Game! Your choice Same as Computer Choice`;
}

let showWinner = (userWin,userChoice,compChoice) => {
    if (userWin === true){
        userScore++
        userS.innerText = userScore;
         console.log("You Win!");
         msg.innerText = `You Win! ${userChoice} beats ${compChoice} `;
    }else{
        compScore++
        compS.innerText = compScore;
         console.log("You Lose!");
         msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    }
}