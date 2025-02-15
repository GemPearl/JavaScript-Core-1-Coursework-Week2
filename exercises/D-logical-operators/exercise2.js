/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

// Check negative
function isNegative(num) {
if(num <0) {
  return true;
}
return false;
}

// Check range
function isBetween5and10(range) {
if(range > 5 && range <10) {
  return true;
}
return false;
}

// Check for short name 
let nam;
function isShortName(nam) {
  if (nam.length < 7){
    return true;
  }
  return false;
}

// Check if name starts with D
let firstLetter;
function startsWithD(firstLetter) {
  if (firstLetter.chartAt(0) == 'D'){
    return true;
  }
  return false;
}
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'?
*/
