/* Write a program that will register runners for the race and give them instructions on race day. */

let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = true;
let registerLate = false;
let runnerAge = 29;

if (runnerAge >= 18 && registerEarly) {
  raceNumber += 1000;
}

if (runnerAge >=18 && registerEarly) {
  console.log(`You will race at 9:30 am. Your race number is: ${raceNumber}`)
} else if (runnerAge >=18 && registerLate) {
  console.log(`You will race at 11:00 am. Your race number is: ${raceNumber}`)
} else {
  console.log(`You will race at 12:30 am. Your race number is: ${raceNumber}`)
}