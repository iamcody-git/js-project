const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById('submit').onclick = function(){

    let guess = document.getElementById('guessId').value;
    guesses +=1;

    if(guess == answer){
        alert(`${answer} is the number. It took you ${guesses} guesses`);
    }
    else if(guess < answer){
        alert('your guess is too small');
    }
    else{
        alert('your guess is too large')
    }
}