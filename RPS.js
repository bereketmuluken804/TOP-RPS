function getComputerChoice(){
    c = Math.floor(Math.random() * 3) + 1
    switch(c) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function getHumanChoice(){
    choice = prompt("(Rock, Paper, Scissors)?: ")
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

let humanScore = 0;
let CompScore = 0;

function playRound(humanChoice) {
    let result
    if (humanScore > 4 || CompScore > 4){
        return;
    } 
    let hc = humanChoice;
    let cc = getComputerChoice();
    let disc;
    
    if(hc === cc) {
        disc = "Draw";
        }
    
    else if ((hc === "Rock" && cc === "Scissors") || (hc === "Scissors" && cc === "Paper") || (hc === "Paper" && cc === "Rock")){
        disc ="You won!";
        humanScore++;
    }
    else {
        disc = "You lost!";
        CompScore++;
    }
        if (humanScore > 4 || CompScore > 4){
        winner = humanScore > CompScore ? "You" : "The Computer";
        result = `Game Over!!!    The winner is ${winner}`;
        score = `You: ${humanScore}__________computer: ${CompScore}`;
        score_board.lastElementChild.textContent = result;
        score_board.firstElementChild.textContent = score;
        return;
    } 
    
    score = `You: ${humanScore}  __________   computer: ${CompScore}`;
    picks = `You: ${hc} ______ Computer: ${cc}`
    score_board.firstElementChild.textContent = score;
    score_board.lastElementChild.textContent = picks;
    return;
}



const btns = document.querySelectorAll("button")

btns.forEach(btn=>{
    btn.addEventListener("click", (e) => {
        playRound(e.target.textContent);
    });
});

const score_board = document.querySelector(".scoreBoard")
