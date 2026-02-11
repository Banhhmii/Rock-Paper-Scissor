let getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

let getHumanChoice = () => {
  let choice = prompt("Enter rock, paper, or scissors: ", "");
  choice = choice.toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    alert("Invalid choice. Please try again.");
    return getHumanChoice();
  }
};

let playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  }
};

let playGame = (num) => {
  for (let i = 0; i <= num; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }
  console.log(
    `Final Score - Player: ${playerScore}, Computer: ${computerScore}`
  );
};

let playerScore = 0;
let computerScore = 0;

  console.log(playGame(5));
