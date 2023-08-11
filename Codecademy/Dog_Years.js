/*Dogs  mature at a faster rate than human beings. We often say a dog’s age can  be calculated in “dog years” to account for their growth compared to a  human of the same age. In some ways we could say, time moves quickly for  dogs — 8 years in a human’s life equates to 45 years in a dog’s life.  How old would you be if you were a dog?
Here’s how you convert your age from “human years” to “dog years”:
• The first two years of a dog’s life count as 10.5 dog years each.
• Each year following equates to 4 dog years.*/

let myAge = 37;
let earlyYears = 2 * 10.5;
let laterYears = (myAge - 2) * 4;
let myAgeInDogYears = earlyYears + laterYears;
let myName = 'donna'
myName = myName.toUpperCase()
console.log(`My name is ${myName}. I am ${myAge} in human years which is ${myAgeInDogYears} years old in dog years.`)