"use strict";
//step 2: computer choice logic
function getComputerChoice() {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * choices.length)];
}
//step 3: human choice logic.
//step 4: keeping scores
let humanScore = 0;
let computerScore = 0;
//step 5: Write the logic to play a single round
function playRound(computerChoice, humanChoice) {
    let beats = { PAPER: "ROCK", ROCK: "SCISSORS", SCISSORS: "PAPER" };
    if (humanScore === 5) {
        alert('Human wins!');
        humanScore = 0;
        computerScore = 0;
        location.reload();
    }
    else if (computerScore === 5) {
        alert('Computer wins!');
        humanScore = 0;
        computerScore = 0;
        location.reload();
    }
    if (humanChoice === computerChoice) {
        return "Draw";
    }
    if (beats[computerChoice] === humanChoice) {
        computerScore += 1;
        return "The computer has won!";
    }
    else {
        humanScore += 1;
        return "The human has won!";
    }
}
/**
 *
 * tengo que agregar un listener que capture el textContent del boton, entonces un addEventListener,
 * que guarde en una variable el textContent del boton que se presiona
 * realiza una version prelimimnar sin for sino en singular a cada boton.
 *
 * debo agregar a los botones un listener que ejecute playRound cuando apreto un boton y ahi capture el
 * textContent como playerChoice o humanChoice
 */
let botones = document.querySelectorAll("#buttons button");
console.log(botones);
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let human_choice = "";
let computer_choice = "";
// Como guardo dentro de cada boton el event listener
botones.forEach((boton) => boton.addEventListener("click", (e) => {
    human_choice = boton.textContent;
    computer_choice = getComputerChoice();
    addWinner(playRound(computer_choice, human_choice.toUpperCase()));
    addContent(`Human chose ${human_choice.toUpperCase()} - Computer chose ${computer_choice}`);
    runningScore(humanScore, computerScore);
}));
function addWinner(winner) {
    let div = document.createElement("div");
    let paragraph = document.createElement("p");
    paragraph.textContent = winner;
    document.body.appendChild(div);
    div.appendChild(paragraph);
    //addBorder(div);
}
function runningScore(humanScore, computerScore) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = `Player Score: ${humanScore} Computer Score: ${computerScore}`;
    document.body.appendChild(div);
    div.appendChild(p);
    addBorder(div);
}
function addContent(content) {
    let div = document.createElement("div");
    let para = document.createElement("p");
    para.textContent = content;
    document.body.appendChild(div);
    div.appendChild(para);
}
function addBorder(element) {
    element.style.border = "2px solid black";
    element.style.width = "fit-content";
    element.style.padding = "1rem";
}
/**
 * Display the running score, and announce a winner of the game once one player reaches 5 points
 *
 */
