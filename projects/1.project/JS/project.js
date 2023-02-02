let userScore = 0;
let ComputerScore= 0;
const userScore_span = document.getElementById("user-score");
const ComputerScore_span = document.getElementById("computer-score");
const userHearts = document.querySelector("#user-heart");
const computerHearts = document.querySelector("#computer-heart");
// const scoreBoard_div = document.querySelector(".score-board");
const userLabel = document.getElementById("userLabel");
const computerLabel = document.getElementById("computerLabel");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}

// give game function a parameter(rock paper or scissors) depends on
// where the user click on.
function game(userChoice){
    const computerChoice = getComputerChoice();
    // Show by user or computer side what it was they choice.
    userLabel.innerHTML= userChoice;
    computerLabel.innerHTML = computerChoice;
       
    
    switch(userChoice + computerChoice){
        //Cases that user wins
        case "rockcissors":
        case "scissorspaper":
        case "paperrock":
            win(userChoice, computerChoice);
            break;
        //Cases that user lost
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            lose(userChoice,computerChoice);
            break;
        //cases that is draw
        case "rockrock":
        case "paperpaper":
        case "scissors":
            draw(userChoice,computerChoice);
            break;
    }
}

function win(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    ComputerScore_span.innerHTML = ComputerScore;

    result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
    removeHearts(userScore, ComputerScore);
}

function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    ComputerScore++;
    ComputerScore_span.innerHTML = ComputerScore;
    userScore_span.innerHTML = userScore;
    //Show what user chose and what computer chose
    result_p.innerHTML = ` ${userChoice} can not beat ${computerChoice}. You lost.`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
    removeHearts(userScore, ComputerScore);
}

function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${userChoice} can not beat ${computerChoice}. It is a draw.`;
    userChoice_div.classList.add("white-glow");
    setTimeout(() => userChoice_div.classList.remove("white-glow"), 300);
}

// We make a function to remove heart from user or computer on depends who lost
function removeHearts(userScore, ComputerScore){
    
    let user = userHearts.querySelector(".user-heart" + ComputerScore);
    let comp = computerHearts.querySelector(".computer-heart" + userScore);       
    
    //When userScore is less than 3 then remove 1 computer heart
    if (userScore < 3 && comp != null){
        comp.parentNode.removeChild(comp);
    //In case user score reach 3 then user Wins and Game is over.
    }else if (userScore == 3 && comp != null){
        comp.parentNode.removeChild(comp);  
        setTimeout(() => userLabel.remove("userLabel"), 500);
        setTimeout(() => computerLabel.remove("computerLabel"), 500); 
        alert("User Wins!. thank you for playing."); 
    //When computerScore is less than 3 then remove 1 user heart
    }else if (ComputerScore < 3 && user != null){
        user.parentNode.removeChild(user);
    //In case computer score reach 3 then Computer Wins and Game is over.
    }else if (ComputerScore == 3 && user != null){
        user.parentNode.removeChild(user);   
        setTimeout(() => userLabel.remove("userLabel"), 500);
        setTimeout(() => computerLabel.remove("computerLabel"), 500);
        alert("Computer Wins!. thank you for playing.");
    }
}

function main(){
    rock_div.addEventListener('click',() => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
}
main();
