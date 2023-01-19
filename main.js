    const rps = ['ROCK', 'PAPER', 'SCISSORS'];
    const compChoice = rps[Math.floor(Math.random() * rps.length)];
    const playerChoice = rps[Math.floor(Math.random() * rps.length)];

    const player = playerChoice;
    const comp = compChoice;
    let youWin = 'You Win!';
    let compWin = 'Computer Wins!';

let choiceCompare = () => {
          if (player=='ROCK' && comp=='PAPER') {
    return(`Paper covers Rock, ${compWin}`);
} else if (player=='ROCK' && comp=='SCISSORS') {
    return(`Rock breaks Scissors, ${youWin}`);
} else if (player=='ROCK' && comp=='SCISSORS') {
    return(`Scissors cut Paper, ${compWin}`);
} else if (player=='PAPER' && comp=='ROCK') {
    return(`Paper covers Rock, ${youWin}`);
} else if (player=='SCISSORS' && comp=='ROCK') {
    return(`Rock breaks Scissors, ${compWin}`);
} else if (player=='SCISSORS' && comp=='PAPER') {
    return(`Scissors cut Paper, ${youWin}`);
}  else if (player=='PAPER' && comp=='SCISSORS') {
    return(`Scissors cut Paper, ${compWin}`)
} else if (player == comp) {
    return('Tie, try again!');
}
}
choiceCompare();
console.log(`The Computer chose: ${comp}`);
console.log(`You chose: ${player}`);
console.log(choiceCompare());

let compTally = 0;
let playerTally = 0;
let tieTally = 0;

let tally = () => {
    if (choiceCompare(``).includes(youWin)) 
        {playerTally++;
            return(playerTally)
        } 

    else if (choiceCompare(``).includes(compWin)) 
        {compTally++;
            return(compTally)
        }

    else 
        {tieTally++;
            return(tieTally)
    }
}
tally(compTally);
tally(playerTally);
tally(tieTally);
console.log(tally(compTally));
console.log(tally(playerTally));
console.log(tally(tieTally));
