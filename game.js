let userHealth = 5;
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
}

function makeRandomNumber() {
  const random = ['one','two','three','four'];
  const choice = random[Math.floor(Math.random() *5 )];
  return choice;

}