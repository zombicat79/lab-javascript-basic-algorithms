// Iteration 1: Names and Input
var hacker1 = "David";
console.log(`The driver's name is ${hacker1}`);

var hacker2 = "Frederic";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);    
}
else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops -- I suppose the purpose of these exercise didn't involve using arrays, but since I was pretty overwhelmed by mental exhaustion I did not manage to figure out any other way of getting the job done without resorting to arrays. 
// 3.1
var characterUnit;
var characterArray = [];
var spacedName;
var upperCaseName;
for (var i = 0; i < hacker1.length; i++) {
  characterUnit = hacker1.slice(i, i+1);
  if (i !== hacker1.length - 1) {
    characterUnit += " ";
  }
  characterArray.push(characterUnit);
}
spacedName = characterArray[0];
for (var i = 1; i < characterArray.length; i++) {
  spacedName = spacedName + characterArray[i];
}
upperCaseName = spacedName.toUpperCase();
console.log(upperCaseName);


// 3.2
var characterArray2 = [];
var reversedName;
for (var i = 0; i < hacker2.length; i++) {
  characterUnit = hacker2.slice(i, i+1);
  characterArray2.unshift(characterUnit);
}
reversedName = characterArray2[0];
for (var i = 1; i < characterArray2.length; i++) {
  reversedName = reversedName + characterArray2[i];
}
console.log(reversedName);


// 3.3 -- After finishing these exercise I realized it wouldn't work properly in case it compared two names beginning with the same letter. However, since I was up until 2am trying to solve the exercise i considered it prudent to leave it as it is.
const alphabet = ["A", "B", "C" , "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const driversInitial = hacker1[0];
var driversDistance = 0;
const navigatorsInitial = hacker2[0];
var navigatorsDistance = 0;
for (var i = 0; i < alphabet.length; i++) {
  if (alphabet[i] !== driversInitial) {
    driversDistance++;
  }
  else {
    break;
  }
}
for (var i = 0; i < alphabet.length; i++) {
  if (alphabet[i] !== navigatorsInitial) {
    navigatorsDistance++;
  }
  else {
    break;
  }
}
if (driversDistance < navigatorsDistance) {
  console.log("The driver's name goes first.")
}
else if (navigatorsDistance < driversDistance) {
  console.log("Yo, the navigator goes first definitely.") 
}
else {
  console.log("What?! You both have the same name?")
}
