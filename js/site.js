// function palindrome() {
//   //document.getElementById("alert").classList.add("invisible");

//   //getting the string from user
//   let msg = document.getElementById("userString").value;

//   //turing the string into array
//   msg_string = msg.split("");

//   //initializing pointers
//   let slow = 0;
//   let fast = msg_string.length - 1;

//   //reversing the array
//   while (slow != fast) {
//     [msg_string[slow], msg_string[fast]] = [msg_string[fast], msg_string[slow]];
//     slow = slow + 1;
//     fast = fast - 1;
//   }

//   let revString = msg_string.join('');
//   displayString(revString);
// }

// function getValue() {
//   document.getElementById("alert").classList.add("invisible");

//   let userString = document.getElementById("userString").value;

//   let revString = reverseAString(userString);
//   displayString(revString);
// }

// function reverseAString(userString) {
//   let revString = [];
//   for (let i = userString.length - 1; i >= 0; i--) {
//     revString.push(userString[i]);
//   }
//   rev = revString.join("");
//   return rev;
// }

// //reverse a string using js
// function reverseAStringJS(userString) {
//   let usrArray = userString.split("");
//   let revArray = usrArray.reverse();
//   let revString = revArray.join("");
//   return revString;
// }

// function displayString(revString) {
//   document.getElementById(
//     "msg"
//   ).innerHTML = `Your String reversed is <strong>${revString} </strong>`;
//   document.getElementById("alert").classList.remove("invisible");
// }

function displayString(revString){
  document.getElementById("msg").innerHTML = `Your reversed string is ${revString}`;
}
