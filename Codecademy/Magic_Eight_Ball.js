/* Build a Magic Eight Ball using control flow in JavaScript. The user will be able to input a question, then our program will output a random fortune. */

let userName = 'Maureen';

userName ? console.log(`Hello, ${userName}!`)
: console.log('Hello!');

let userQuestion = 'Will I be happy?'
console.log(`${userName}: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
  case 1:
   console.log('It is certain');
   break;
  case 2:
    console.log('It is decidedly so');
    break;
  case 3:
  console.log('Reply hazy try again');
    break;
  case 4:
    console.log('Cannot predict now');
    break;
  case 5:
    console.log('Do not count on it');
    break;
  case 6:
    console.log('My sources say no');
    break;
  case 7:
    console.log('Outlook not so good');
    break;
  case 8:
    console.log('Signs point to yes');
    break;
}

if (randomNumber === '0') {
  randomNumber = eightBall;
} else {
  randomNumber = Math.floor(Math.random() * 8);
  randomNumber = eightBall;
}

console.log(eightBall)