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
    if (humanScore === 5 || CompScore === 5){
        winner = humanScore > CompScore ? "You" : "The Computer";
        result = `Game Over!!!    The winner is ${winner}`;
        score_board.textContent = result;
        return;
    } 
    result = ` ========= ${disc} =========== \nYou: ${humanScore}          computer: ${CompScore}\nYou: ${hc}    Computer: ${cc}`;
    score_board.textContent = result;
    return;
}

function playGame(){
    rounds = Number(prompt("How many rounds?\nDefault: 5") || 5)
    alert(`The first to get ${rounds} wins is the winner\nGood luck`)
    while((humanScore + CompScore) != rounds){
        playRound()
    }
    winner = humanScore > CompScore ? "You" : "The Computer";
    alert(`${winner} have won the total game`);
    return;
}

const btns = document.querySelectorAll("button")

btns.forEach(btn=>{
    btn.addEventListener("click", (e) => {
        playRound(e.target.textContent);
    });
});

const score_board = document.querySelector(".scoreBoard")
