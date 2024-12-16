// function toggleDarkMode() {
//     const body = document.body;
//     const checkbox = document.getElementById('darkMode');

//     if (checkbox.checked) {
//         // Add the dark-mode class if the checkbox is checked
//         body.classList.add('dark-mode');
//     } else {
//         // Remove the dark-mode class if the checkbox is unchecked
//         body.classList.remove('dark-mode');
//     }
// }

document.getElementById("darkMode").addEventListener("change", function () {
  const body = document.body;

  if (this.checked) {
    // Add the dark-mode class if the checkbox is checked
    body.classList.add("dark-mode");
  } else {
    // Remove the dark-mode class if the checkbox is unchecked
    body.classList.remove("dark-mode");
  }
});

// Alert
document.getElementById("btn").onclick = function () {
  alert("i am dialog");
};

// Console
function myFunc() {
  console.log("this is a console call");
}

// Changing innerHTML
function myFunc2() {
  document.getElementById("demo").innerHTML = "Hello Earth!";
}

// Changing Values of SRC attribute
function myFunc3() {
  document.getElementById("image").src = "images/2.png";
}
// Changing Values of SRC attribute using Event Listener
document.getElementById("btn3").addEventListener("click", function () {
  document.getElementById("image2").src = "images/2.png";
});

// Change Styling of Elements
function myFunc4() {
  document.getElementById("demo2").style.color = "green";
  document.getElementById("demo2").style.fontWeight = "bold";
  document.getElementById("demo2").style.fontSize = "100px";
}

// Show/Hide the DIV
function show() {
  document.getElementById("div").style.display = "block";
}

function hide() {
  document.getElementById("div").style.display = "none";
}

// Changing innerHTML using AddEventListener Method
document.getElementById("btn2").addEventListener("click", function () {
  document.getElementById("demo3").innerHTML = "Hello Everyone!";
});

// Using Console
const x = 5;
const y = 5;
const sum = x + y;
console.log(sum);

// Using Alert
function myFunc5() {
  const x = 5;
  const y = 6;
  const sum = x + y;
  alert(sum);
}

// Sum to InnerHTML
function myFunc6() {
  const x = 5;
  const y = 6;
  const sum = x + y;
  document.getElementById("demo4").innerHTML = sum;
}

// Sum using Event listener and Textarea
function myFunc6() {
  const x = 5;
  const y = 6;
  const sum = x + y;
  document.getElementById("textarea1").value = sum; // Use 'value' for textarea
}
document.getElementById("calculateBtn").addEventListener("click", myFunc6);

function myFunc7() {
  const x = 5;
  const y = 6;
  const sum = x + y;
  document.write(sum);
}

// Case sensitive
function myFunc8() {
  let num = 5;
  let Num = 11;

  let sum = num + Num;
  document.write(sum);
}

// Variable should start (Letter, Underscore, Dollar Sign)

// Variables Example
function myFunc9() {
  let firstName = "John ";
  let lastName = "Doe ";
  let age = 23;

  alert(firstName + lastName + age);
}

// Change Variable Value
function myFunc10() {
  let city = "Mumabi";
  city = "Manila";
  alert(city);
}

// Functions with Params
function writeText(str) {
  document.getElementById("demo5").innerHTML = str;
}
writeText("Hello World");

// Functions with Params 2
function addNumbers(num1, num2) {
  const sum = num1 + num2;
  document.getElementById("demo6").innerHTML = sum;
}
addNumbers(5, 6);

// Functions with Params 3
function addNumbers2(num1, num2) {
  const sum = num1 + num2;
  document.getElementById("demo7").innerHTML = sum;
}

// The Return Statement 1
function addNumbers3(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
// Function Caller
document.getElementById("demo8").innerHTML = addNumbers3(2, 3);

// // The Return Statement 2
// function addNumbers4(num1, num2) {
//     const sum = num1 + num2;
//     return sum;
// }
// // Function Caller
// alert(addNumbers4(2,3));

// To Upper Case
function toUpperCase() {
  const inputField = document.getElementById("input1");
  inputField.value = inputField.value.toUpperCase();
}

// To Lower Case
function toLowerCase() {
  const inputField = document.getElementById("input2");
  inputField.value = inputField.value.toLowerCase();
}

// To Upper Case using windows on load
window.onload = function () {
  const inputField = document.getElementById("input3");
  inputField.addEventListener("change", function () {
    inputField.value = inputField.value.toUpperCase();
  });
};

// This code will run only after the entire page is loaded
window.onload = function () {
  console.log("Page is fully loaded");
};

// Global variable with string
const fruit = "Mango";
function myFunc11() {
  document.getElementById("demo9").innerHTML = "My favorite fruit is " + fruit;
}

// Kilometers to Miles
function toMiles(kilometer) {
  const miles = kilometer * 0.62137;
  return kilometer + " kilometer/s " + "equals " + miles + " miles.";
}

document.getElementById("demo10").innerHTML = toMiles(5);

// On Click Event Property
const btn = document.getElementById("btn4");
// Event Handler Below
btn.onclick = function () {
  alert("The button was Clicked");
};

// Another addEventListener Click
const btn2 = document.getElementById("btn5");
btn2.addEventListener("click", function () {
  alert("button is clicked");
});

// More Event Types

// Change Event
const select = document.getElementById("city");
select.addEventListener("change", function () {
  const val = document.getElementById("city").value;
  document.getElementById("demo11").innerHTML = val;
});

// Mouse Over Event
const elem = document.getElementById("demo12");
elem.addEventListener("mouseover", function () {
  elem.innerHTML = "Hello World";
});

// Another Mouse Over and Mouseout
const elem1 = document.getElementById("demo13");
const originalText = elem.innerHTML; // Store the original text

elem1.addEventListener("mouseover", () => {
  elem1.innerHTML = "Hello World";
});

elem1.addEventListener("mouseout", () => {
  elem1.innerHTML = originalText;
});

// Keypress Event
const area = document.getElementById("textarea");
area.addEventListener("keypress", () => {
  document.getElementById("demo14").innerHTML = area.value;
});

// Focus and BlurEvent
const area2 = document.getElementById("textarea2");
const unfocus = area2.style.background;
area2.addEventListener("focus", () => {
  area2.style.background = "yellow";
});

area2.addEventListener("blur", () => {
  area2.style.background = unfocus;
});

// Resize Event
window.addEventListener("resize", () => {
  document.getElementById("windowWidth").innerHTML = window.innerWidth;
  document.getElementById("windowHeight").innerHTML = window.innerHeight;
});

// Number Data Type (Number || Float)

// (==) Comparison Operator Boolean Output (Boolean Data type)
const a = 2;
const b = 3;
const areTheyEqual = a == b;
document.getElementById("demo15").innerHTML = areTheyEqual;

// Object Data Type
const banana = {
  color: "yellow",
  size: "long",
  quantity: 3,
  isSweet: true,
};
document.getElementById("demo16").innerHTML =
  "Banana <br />" +
  "Color: " +
  banana.color +
  "<br />" +
  "Size: " +
  banana.size +
  "<br />" +
  "Quantity: " +
  banana.quantity +
  "<br />" +
  "Does it taste sweet: " +
  banana.isSweet;

// Arrays
const fruits = ["apple", "oranges", "rambutan", "mango"];
document.getElementById("demo17").innerHTML =
  fruits[0] + " " + fruits[1] + " " + fruits[3];

// Undefined Data type
let title;
document.getElementById("demo18").innerHTML = title;

// Null Data Type
const fruit1 = null;
console.log(fruit1);

let fruit2 = "apple";
document.getElementById("displayFruit").innerHTML = fruit2 + "<br/>";
fruit2 = null;
document.getElementById("displayFruit").innerHTML += fruit2;

// Dynamic
let i = "text";
i = true;
i = 21; //this will only display
document.getElementById("demo19").innerHTML = i;

// typeof Operator
document.getElementById("demo20").innerHTML =
  typeof "John Doe" +
  "<br/>" +
  typeof 21 +
  "<br/>" +
  typeof true +
  "<br/>" +
  typeof undefined;

// typeof Operator Complex Data
document.getElementById("demo21").innerHTML =
  typeof { firstname: "John", lastName: "Doe" } +
  "<br/>" +
  typeof ["apples", "oranges", "bananas"] +
  "<br/>" +
  typeof null +
  "<br/>" +
  typeof function myFunc12() {};

// typeof Operator example
let o = "john";
o = 20;
console.log(typeof o);

// OPERATORS
// (=) Assignment Operator
// (+=) Addition Assignment
let p = 3;
let s = 2;
p += s;
console.log(p);
// (+-x/) Arithmetic Operators
// (==) Comparison Operators
// (**) Exponentiation
// (%) Remainder
const j = 100 % 7;
console.log(j);
// (++) Increment
let l = 4;
l++;
console.log(l);
// (--) Decrement
let g = 4;
g--;
console.log(g);

// PEMDAS
const h = (10 + 3) * 5;
console.log(h);

// ARITHMETIC OPERATORS
// (=) Assignment Operator
// (+=) Addition Assignment
// (-=) Subtraction Assignment
// (*=) Multiplication Assignment
// (/=) Division Assignment
// (-=) Subtraction Assignment
// (%=) Remainder Assignment
// (**=) Exponentiation Assignment
let c = 3;
let n = 2;
c **= n;
console.log(c);

// Comparison Operators
// (==) Equality Operator
document.getElementById("demo22").innerHTML =
  (2 == 2) /* returns true */ +
  "<br />" +
  (2 == 4) /* returns false */ +
  "<br />" +
  ("2" == 2) /* returns true */ +
  "<br />" +
  ("Hello world" == "Hello world") /* returns true */ +
  "<br />" +
  ("Hello world" == "Hello everyone"); /* returns false */
// (!=) Inequality Operator
document.getElementById("demo23").innerHTML =
  (2 != 2) /* returns false */ +
  "<br />" +
  (2 != 4) /* returns true */ +
  "<br />" +
  ("2" != 2) /* returns false */ +
  "<br />" +
  ("Hello world" != "Hello world") /* returns false */ +
  "<br />" +
  ("Hello world" != "Hello everyone"); /* returns true */
// (===) Identity Operator(Strict)
document.getElementById("demo24").innerHTML =
  (2 === 2) + "<br/>" /* returns true */ + ("2" === 2); /* returns false */
// (!==) Identity Operator(Strict)
document.getElementById("demo25").innerHTML =
  (2 !== 2) + "<br/>" /* returns false */ + ("2" !== 2); /* returns true */
// (>) Greater than Operator
document.getElementById("demo26").innerHTML =
  (4 > 2) +
  "<br/>" /* returns true */ +
  (2 > 4) +
  "<br/>" /* returns false */ +
  (2.25 > 2.24) +
  "<br/>" /* returns true */ +
  (2.24 > 2.25); /* returns false */
// (>=) Greater than or Equal Operator
document.getElementById("demo27").innerHTML =
  (4 >= 2) +
  "<br/>" /* returns true */ +
  (2 >= 4) +
  "<br/>" /* returns false */ +
  (2.25 >= 2.24) +
  "<br/>" /* returns true */ +
  (2.24 >= 2.25) +
  "<br/>" /* returns false */ +
  (4 >= 4) +
  "<br/>" /* returns true */ +
  (2.25 >= 2.25); /* returns true */
// (<) Less than Operator
document.getElementById("demo28").innerHTML =
  (4 < 2) +
  "<br/>" /* returns false */ +
  (2 < 4) +
  "<br/>" /* returns true */ +
  (2.25 < 2.24) +
  "<br/>" /* returns false */ +
  (2.24 < 2.25); /* returns true */
// (<=) Less than or Equal Operator
document.getElementById("demo29").innerHTML =
  (4 <= 2) +
  "<br/>" /* returns false */ +
  (2 <= 4) +
  "<br/>" /* returns true */ +
  (2.25 <= 2.24) +
  "<br/>" /* returns false */ +
  (2.24 <= 2.25) +
  "<br/>" /* returns true */ +
  (4 <= 4) +
  "<br/>" /* returns true */ +
  (2.25 <= 2.25); /* returns true */

// LOGICAL OPERATORS
// Logical (&&)
document.getElementById("demo30").innerHTML =
  (true && true) +
  "<br/>" /* returns true */ +
  (true && false) +
  "<br/>" /* returns false */ +
  (3 == 3 && 3 == 3) +
  "<br/>" /* returns true */ +
  (3 == 4 && 3 == 3) +
  "<br/>" /* returns false */ +
  (5 > 3 && 4 < 6) +
  "<br/>" /* returns true */ +
  (3 > 5 && 6 < 4); /* returns false */

// Logical (||)
document.getElementById("demo31").innerHTML =
  (true || true) +
  "<br/>" /* returns true */ +
  (true || false) +
  "<br/>" /* returns true */ +
  (false || false) +
  "<br/>" /* returns false */ +
  (2 == 2 || 2 == 3) +
  "<br/>" /* returns true */ +
  (1 == 2 || 2 == 3) +
  "<br/>" /* returns false */ +
  (10 > 5 || 5 < 10) +
  "<br/>" /* returns true */ +
  (5 > 10 || 10 < 5); /* returns false */
// Logical Not (!)
document.getElementById("demo32").innerHTML =
  !true +
  "<br/>" /* returns false */ +
  !false +
  "<br/>" /* returns true */ +
  !(1 == 1) +
  "<br/>" /* returns false */ +
  !(1 > 2); /* returns true */

// Ternary Operator
const testScore = 80;
const testResult = testScore >= 75 ? "Passed" : "Failed";
document.getElementById("demo33").innerHTML = testResult;

// Bitwise Opeartors
// Bitwise AND (&)
const num1 = 0 & 0; /* returns 0 */
const num2 = 0 & 1; /* returns 0 */
const num3 = 1 & 0; /* returns 0 */
const num4 = 1 & 1; /* returns 1 */

document.getElementById("demo34").innerHTML =
  num1 + "<br/>" + num2 + "<br/>" + num3 + "<br/>" + num4;
// Bitwise OR (|)
const numb1 = 0 | 0; /* returns 0 */
const numb2 = 0 | 1; /* returns 1 */
const numb3 = 1 | 0; /* returns 1 */
const numb4 = 1 | 1; /* returns 1 */

document.getElementById("demo35").innerHTML =
  numb1 + "<br/>" + numb2 + "<br/>" + numb3 + "<br/>" + numb4;

// Bitwise XOR (^)
const num5 = 0 ^ 0; /* returns 0 */
const num6 = 0 ^ 1; /* returns 1 */
const num7 = 1 ^ 0; /* returns 1 */
const num8 = 1 ^ 1; /* returns 0 */

document.getElementById("demo36").innerHTML =
  num5 + "<br/>" + num6 + "<br/>" + num7 + "<br/>" + num8;

// Bitwise NOT (~)
const num9 = ~0; /* returns -1 */
const num10 = ~1; /* returns -2 */
document.getElementById("demo37").innerHTML = num9 + "<br/>" + num10;

// Object Data Types
const person = {
  fullName: "John Doe",
  age: 30,
  hobbies: ["coding", "playing chess", "gaming"],
  isMarried: true,
};

const person1 = {
  fullName: "John Doe",
  age: 30,
  showName: function () {
    alert(this.fullName);
  },
  showAge: function () {
    alert(this.age);
  },
};

// Acessing Object's Propertis

// The Dot Notation
const person2 = {
  name: "John Narbaja",
  age: 24,
  hobbies: ["coding", "guitaring", "pianing"],
};
document.getElementById("demo38").innerHTML =
  person2.name + "<br/>" + person2.age + "<br/>" + person2.hobbies[2];

//The Bracket Notation
const person3 = {
  name: "John Narbaja",
  age: 24,
  hobbies: ["coding", "guitaring", "pianing"],
};
document.getElementById("demo39").innerHTML =
  person2["name"] + "<br/>" + person2["age"] + "<br/>" + person2["hobbies"][0];

// This keyword on Object
const person4 = {
  name: "John Narbaja",
  age: 24,
  hobbies: ["coding", "guitaring", "pianing"],
  showDetails: function () {
    alert(this.name + " is " + this.age + " years old.");
  },
};

// An Object In An Object
const fruit3 = {
  mango: {
    color: "yellow",
    taste: "sweet",
  },
  apple: {
    color: "red",
    taste: "sweet",
  },
  showFruit: function () {
    alert(fruit3.mango.color);
  },
};

// Javascript strings
// Uses single or double qoutes

// String Greeting (Concatenation)
function greetings() {
  const userName = window.prompt("Hello Weclome, May I know you name?");
  const str = "Nice to meet you " + userName + " We are Seekers.";
  alert(str);
}

// Escaping Characters
const str1 = 'She is called "Maria"'; // escaping "
const str2 = "She is called 'Maria'"; // escaping '
const str3 = "Escaping backslash \\"; // escaping
document.getElementById("demo40").innerHTML =
  str1 + "<br />" + str2 + "<br />" + str3;

// JAVASCRIPT STRING METHODS

// Getting String Length
function strlen() {
  const str = "codeliber";
  const strlen = str.length;
  document.write(strlen);
}

// Retrieving Character
function retChar() {
  const str = "codeliber";
  const x = str[3];
  document.write(x);
}

// Finding a Substring
function substring1() {
  const str = "Where are they, where did they go?";
  const strPos = str.indexOf("they");
  document.write(strPos);
}

function substring2() {
  const str = "Where are they, where did they go?";
  const strPos = str.lastIndexOf("they");
  document.write(strPos);
}

// the Search Method
function mySearch() {
  const str = "Where are they, where did they go?";
  const strPos = str.search("they");
  alert(strPos);
}

// the Slice Method
function mySlice() {
  const str = "The quick brown fox jumps over the lazy dog.";
  const result = str.slice(10, 19);
  alert(result);
}

// the Slice Method
function mySubstring() {
  const str = "The quick brown fox jumps over the lazy dog.";
  const result = str.substring(10, 19);
  alert(result);
}

// JAVASCRIPT NUMBERS

// Extra Large or small numbers
const number1 = 212e6;
const number2 = 212e-6;
document.getElementById("demo41").innerHTML = number1 + "<br/>" + number2;

// STRINGS AS NUMBERS
// Can Convert
const difference = "10" - "2";
console.log("difference: " + difference);

const product = "10" * "2";
console.log("product: " + product);

const quotient = "10" / "2";
console.log("quotient: " + quotient);
// Cannot Convert on Addition
const summ = "10" + "2";
console.log("sum: " + summ);

// Performing operations on string and number
const difference2 = "10" - 2;
console.log("difference2: " + difference2); //retruns 8

const product2 = "10" * 2;
console.log("product2: " + product2); //retruns 20

const quotient2 = "10" / 2;
console.log("quotient2: " + quotient2); //retruns 5

const sum2 = "10" + 2;
console.log("sum2: " + sum2); //retruns 102 again same above

// Hexadecimal Numbers
const hexa = 0xa; //returns 10
const hexa2 = 0xff; //returns 255
const hexa3 = 0x123456789abcdef; //returns 8198........
document.getElementById("demo42").innerHTML =
  hexa + "<br/>" + hexa2 + "<br/>" + hexa3;

// NaN - Not a Number
const qout = 10 / "5"; //returns 1
const qout2 = 10 / "coding"; //returns NaN
document.getElementById("demo43").innerHTML = qout + "<br/>" + qout2;

// isNan() Method
const nan1 = isNaN(5); // returns false
const nan2 = isNaN("5"); // returns false
const nan3 = isNaN("Hello World!"); // returns true
const nan4 = isNaN("five"); // returns true
const nan5 = isNaN(12 / "five"); // returns true

document.getElementById("demo43").innerHTML =
  nan1 + "<br />" + nan2 + "<br />" + nan3 + "<br />" + nan4 + "<br />" + nan5;

// JAVASCRIPT NUMBER METHODS

// isInteger() Method
const nan_1 = Number.isInteger(21); // true
const nan_2 = Number.isInteger(3.21); //false
const nan_3 = Number.isInteger("Hello"); //false

document.getElementById("demo44").innerHTML =
  nan_1 + "<br />" + nan_2 + "<br />" + nan_3;

// parseInt() Method
const parse1 = parseInt("21"); // returns 21
const parse2 = parseInt("3.21"); // returns 3
const parse3 = parseInt("21 days"); // returns 21
const parse4 = parseInt("3 months and 21 days"); // returns 3
const parse5 = parseInt("months 3"); // returns NaN
const parse6 = parseInt("I lova Codeliber!"); // returns NaN

document.getElementById("demo45").innerHTML =
  parse1 +
  "<br />" +
  parse2 +
  "<br />" +
  parse3 +
  "<br />" +
  parse4 +
  "<br />" +
  parse5 +
  "<br />" +
  parse6;

// parseFloat() Method
const parsefloat_1 = parseFloat("21"); // returns 21
const parsefloat_2 = parseFloat("3.21"); // returns 3.21
const parsefloat_3 = parseFloat("21 days"); // returns 21
const parsefloat_4 = parseFloat("3 months and 21 days"); // returns 3
const parsefloat_5 = parseFloat("months 3"); // returns NaN
const parsefloat_6 = parseFloat("I love Codeliber!"); // returns NaN

// Displaying results in HTML
document.getElementById("demo46").innerHTML =
  parsefloat_1 +
  "<br />" +
  parsefloat_2 +
  "<br />" +
  parsefloat_3 +
  "<br />" +
  parsefloat_4 +
  "<br />" +
  parsefloat_5 +
  "<br />" +
  parsefloat_6;

// toFixed() Method reutrns strings
const tofixed_1 = (21.123456).toFixed(1); // returns 21.1
const tofixed_2 = (21.123456).toFixed(2); // returns 21.12
const tofixed_3 = (21.123456).toFixed(3); // returns 21.123

document.getElementById("demo47").innerHTML =
  tofixed_1 + "<br />" + tofixed_2 + "<br />" + tofixed_3;

// toExponential() Method returns strings
const toExponential_1 = (55.1234).toExponential(1); // returns 5.5e+1
const toExponential_2 = (55.1234).toExponential(2); // returns 5.51e+1
const toExponential_3 = (55.1234).toExponential(3); // returns 5.512e+1

document.getElementById("demo48").innerHTML =
  toExponential_1 + "<br />" + toExponential_2 + "<br />" + toExponential_3;

//toString() Method
const toString_1 = (55.1234).toString(); // returns 5.5e+1
const toString_2 = (55.1234).toString(); // returns 5.51e+1
const toString_3 = (55.1234).toString(); // returns 5.512e+1

document.getElementById("demo49").innerHTML =
  toString_1 + "<br />" + toString_2 + "<br />" + toString_3;

// If Else Statement
let time = 21;

if (time < 10) {
  console.log("Good morning");
} else if (time < 20) {
  console.log("Good day");
} else if (time == 20) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

// For Loop
const loop = document.getElementById("loop");
for (let s = 0; s < 10; s++) {
  loop.innerHTML += "Hello World<br>";
}

//   Switch Statement
let time2 = 20;
let message;

switch (true) {
  case time2 < 10:
    message = "Good morning";
    break;
  case time2 < 20:
    message = "Good day";
    break;
  case time2 == 20:
    message = "Good afternoon";
    break;
  default:
    message = "Good evening";
}

console.log(message);
