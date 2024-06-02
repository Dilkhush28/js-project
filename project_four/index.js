let randomNumber = parseInt(Math.random() * 100 + 1);

const userinput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guesses = document.querySelector(".guesses");
const remainig = document.querySelector(".lastResult");
const lower = document.querySelector(".lowOrHi");
const result = document.querySelector(".resultParas");
const p = document.createElement("p");
prevalue = [];
newguess = 1;
playGuess = true;
if (playGuess) {
  submit.addEventListener("click", function (chai) {
    chai.preventDefault();
    const guess = parseInt(userinput.value);
    validateGueses(guess);
  });
}
function validateGueses(guess) {
  if (isNaN(guess)) {
    alert(`please enter the valid value`);
  } else if (guess < 1) {
    alert(`please enter the value more than 1`);
  } else if (guess > 100) {
    alert(`please enter the value less than 100`);
  } else {
    prevalue.push(guess);
    if (newguess === 11) {
        cleanGuess(guess)
      displaymessage(`Game over . ${randomNumber}`);
      endGames();
    } else {
        cleanGuess(guess)
        checkGuess(guess)
    }
  }
}
function checkGuess(guess) {
  if(guess === randomNumber){
    displaymessage(`Your guesses it rigth`)
    endGames()
  }else if(guess < randomNumber){
    displaymessage(`Number is Too low`)
  }else if(guess > randomNumber){
    displaymessage(`Number is Too high`)
  }
}
function cleanGuess(guess) {
  userinput. value = ''
  guesses.innerHTML += `${guess},`
  newguess++;
  remainig.innerHTML = `${11 - newguess}`

  
}
function displaymessage(message) {
  lower.innerHTML = `<h2>${message}</h2>`
}
function endGames() {
  userinput.value = ''
  userinput.setAttribute('disable','')
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGames">Start new Game</h2>`;
  result.appendChild(p);
  playGuess = false;
  newGame()

}
function newGame() {
  const newGamebutton = document.querySelector('#newGames')
  newGamebutton.addEventListener("click",function(chai){
    randomNumber = parseInt(Math.random() * 100 + 1);
 prevalue = [];
 newguess = 1;
 guesses.innerHTML = '';
 remainig.innerHTML = `${11 - newguess}`;
 userinput.removeAttribute = ('disable','') 
    playGuess = true
  })

}
