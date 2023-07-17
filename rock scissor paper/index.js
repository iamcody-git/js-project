let Player = document.querySelector('#player');
let Computer = document.querySelector('#computer');
let Result = document.querySelector('#result');
let ChoiceBtn= document.querySelectorAll('.choiceBtn');

let player;
let computer;
let result;

ChoiceBtn.forEach(button => button.addEventListener('click', ()=>{
    player = button.textContent;
    computerTurn ();
    Player.textContent=`Player:${player}`;
    Computer.textContent=`Computer:${computer}`;
    Result.textContent=checkWinner();

}))

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = 'ROCK';
            break;

        case 2:
            computer = 'PAPER';
            break;
        case 3:
            computer = 'SCISSORS';
            break;    
    }
}

function checkWinner(){
    if(player == computer){
        return 'draw!';
    }
    else if(computer == 'ROCK'){
        return(player == 'PAPER')?'YOU WON!':'you lose!'
    } 
    else if(computer == 'PAPER'){
        return(player == 'SCISSORS')?'YOU WON!'
        :'you lose!';
    }
    else if(computer == 'SCISSORS'){
        return(player == 'ROCK')?'YOU WON!'
        :'you lose!';
    }
}