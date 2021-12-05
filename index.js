//generates random variable from 1 to 6
var rnOne = Math.floor(Math.random() * 6) + 1;
var rnTwo = Math.floor(Math.random() * 6) + 1;

//generates random images from starting files
var rimgOne = 'images/dice' + rnOne + '.png';
var rimgTwo= 'images/dice' + rnTwo + '.png';

document.querySelectorAll('img')[0].setAttribute('src',rimgOne);
document.querySelectorAll('img')[1].setAttribute('src',rimgTwo);

// conditions for inputing text on 'h1'
if (rnOne > rnTwo){
  document.querySelector('h1').innerHTML = "🤖 Player 1 WINS";
}
else if (rnTwo > rnOne){
  document.querySelector('h1').innerHTML = "Player 2 WINS 👽";
}
else{
  document.querySelector('h1').innerHTML = "🤝 Draw! 🤝";
}
