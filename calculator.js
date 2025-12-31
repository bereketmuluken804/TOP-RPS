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

function playRound() {

    let hc = getHumanChoice();
    let cc = getComputerChoice();
    let win = "lost!";
    if(hc === cc) {
        alert(`It's a Draw\nYou: ${humanScore}           computer: ${CompScore}\n`)
        return;}
    
    else if ((hc === "Rock" && cc === "Scissors") || (hc === "Scissors" && cc === "Paper") || (hc === "Paper" && cc === "Rock")){
        win ="won!";
        humanScore++;
    }
    else {
        CompScore++;
    }
    alert(`You: ${humanScore}           computer: ${CompScore}\nYou've ${win}\nYou: ${hc}    Computer: ${cc}`)

}

