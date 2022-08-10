/** 
 * Aiden (Ha Yoon) Jang, last updated 08/09/2022.
 * 
 * This source code is designed and produced to be a counter application for GA SEI- Flex Unit-1 Assessment 
*/
// create global variables DOM 
// create functions
// 

// claim variables using DOM 
let topValue = 0;
let bottomValue = 1;
const numResult = document.querySelector('#number-display');
const numInput = document.querySelector('#number-type');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');

numResult.value = topValue;
numInput.value = bottomValue;

plus.addEventListener('click', onClick = () => {
  // create an intermediate variable of result with parseInt of displaying value
  let result = parseInt(numResult.value, 10);
  // alternative to if statement of result using isNaN();
  result = isNaN(result) ? 0 : result;
  // result continues to inclement
  result++;
  document.querySelector('#number-display').value = result;
});

minus.addEventListener('click', onClick = () => {
  let result = parseInt(numResult.value, 10);
  let numDeclement = parseInt(numInput.value, 10);
  // alternative to if statement of result using isNaN();
  result = isNaN(result) ? 0 : result;
  numDeclement = isNaN(numDeclement) ? 0 : numDeclement;
  // result continues to declement
  result-= (numDeclement) + (result);
  numDeclement--;
  document.querySelector('#number-display').value = result;
  document.querySelector('#number-type').value = numDeclement;
});


// I made myself an overcomplicated logic.. 
