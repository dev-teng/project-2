let userHealth = 10;
let userScore = 0;

document.querySelector('#oneBtn').addEventListener('click', ()=>{
  selectChoice("one")
  })
document.querySelector('#twoBtn').addEventListener('click', ()=>{
  selectChoice("two")
  })
document.querySelector('#threeBtn').addEventListener('click', ()=>{
  selectChoice("three")
  })
document.querySelector('#fourBtn').addEventListener('click', ()=>{
  selectChoice("four")
  })

function selectChoice (choice) {
  alert(choice);
  const randomNumber = makeRandomNumber();
  if(choice === randomNumber){
    alert('Your guess is correct!')
    userScore++
  }else {
    userHealth--
    alert('You are out of luck');
  }
  updateScore();

  if(userScore === 5) {
    alert('Congratulations you win!');
  }else if (userHealth === 0) {
    alert('Better luck next time!');
  }

}

function updateScore() {
  document.querySelector('#userHealth').innerHTML = userHealth;
  document.querySelector('#userScore').innerHTML = userScore;

}


function makeRandomNumber() {
  const random = ['one','two','three','four'];
  const choice = random[Math.floor(Math.random() *5 )];
  return choice;

}