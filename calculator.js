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