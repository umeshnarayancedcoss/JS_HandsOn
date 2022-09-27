// JS Variables Exercise 1
var carName = "Volvo";

// JS variables Exercise 2
var x = 50

// JS Variables Exercise 3
var x = 5;
var y = 10;
document.getElementById("demo").innerHTML = x + y;

// JS variables exercise 4
var x = 5;
var y = 10;
var z = x + y;
alert(z);

// JS Variables exercise 5
var firstName = "John", lastName = "Doe", age = 35;

// JS Operators exercise 1
alert(10 * 5);

// JS Operators exercise 2
alert(10 / 2);

// JS Operators exercise 3
alert(15 % 9);

// JS Operators exercise 4
x = 10;
y = 5;
x += y;

// JS Operators exercise 5
x = 10;
y = 5;
x *= y;

// JS Datatypes Exercise 1
let length = 16;          // Number
let lastName = "Johnson"; // String
const x = {
  firstName: "John",
  lastName: "Doe"
};                        // Object

// JS FUNCTIONS exercise 1
function myFunction() {
  alert("Hello World!");
}
myFunction();

//JS Function exercise 2
function myFunction() {
  alert("Hello World!");
}


// JS Functions exercise 3
function myFunction() {
  return "Hello";
}
document.getElementById("demo").innerHTML = myFunction();

// JS Functions exercise 4
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello";
}
{
  //   JS Objects exercise 1
  const person = {
    firstName: "John",
    lastName: "Doe"
  };
  alert(person.firstName);
}
// JS Objects exercise 2
const person = {
  firstName: "John",
  lastName: "Doe",
  country: "Norway"
};

{
  // JS Objects exercise 3
  const person =
  {
    name: "John", age: 50
  };
  alert(person.name + " is " + person.age);
}

{
  // JS Events exercise 1
  <button onclick="alert('Hello')">Click me.</button>
}

{
  //JS Events exercise 2
  <button onclick="myFunction()">Click me.</button>
}

{
  //JS Events exercise 3
  <div onmouseover="this.style.backgroundColor='red'">myDIV.</div>
}

{
  // JS strings exercise 1
  let txt = "Hello World!";
  let x = txt.length;
  alert(x);
}

{
  // JS strings exercise 2
  let txt = "We are \"Vikings\"";
  alert(txt);
}

{
  // JS strings exercise 3
  let str1 = "Hello ";
  let str2 = "World!";
  alert(str1 + str2);
}

{
  // JS String Methods exercise 1
  let txt = "Hello World!";
  txt = txt.
    toUpperCase();
}

{
  // JS String Methods exercise 2
  let txt = "I can eat bananas all day";
  let x = txt.slice(10, 17);
}

{
  // JS String Methods exercise 3
  let txt = "Hello World";
  txt = txt.replace("Hello", "Welcome");
}

{
  // JS String Methods exercise 4
  let txt = "Hello World";
  txt = txt.toUpperCase();
}

{
  // JS String Methods exercise 5
  let txt = "Hello World";
  txt = txt.toLowerCase();
}

{
  // JS Arrays exercise 1
  const cars = ["Saab", "Volvo", "BMW"];
  let x = cars[1];
}

{
  //JS Arrays exercise 2
  const cars = ["Volvo", "Jeep", "Mercedes"];
  cars[0] = "Ford";
}

{
  // JS Arrays exercise 3
  const cars = ["Volvo", "Jeep", "Mercedes"];
  alert(cars.length);
}
{
  //JS Array Methods Exercise 1
  const fruits = ["Banana", "Orange", "Apple"];
  fruits.pop();
}

{
  //JS Array Methods Exercise 2
  const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi");
}

{
  //JS Array Methods Exercise 3
  const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.splice(1,2);
}

{
  // JS Array Sort Exercise 1
  const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.sort();
}

{
  // JS Dates Exercise 1
  const d = new Date();
alert(d);
}

{
// JS Dates Exercise 2
const d = new Date();
year = d.getFullYear();
}

{
  // JS Dates Exercise 3
  const d = new Date();
month = d.getMonth();
}

{
  // JS Dates Exercise 4
  const d = new Date();
d.setFullYear(2020);
}

{
  // JS Math Exercise 1
let r = Math.random();
}

{
  // JS Math Exercise 2
  let x = Math.max(10, 20);
}

{
  //JS Math Exercise 3
  let x = Math.round(5.3);
}

{
  //JS Math Exercise 4
  let x = Math.sqrt(9);
}

{
  // JS Comparisons Exercise 1
x = 10;
y = 5;
alert(x>y);
}

{
  // JS Comparisons Exercise 2
  x = 10;
y = 10;
alert(x ==y);
}

{
   // JS Comparisons Exercise 3
  x = 10;
y = 5;
alert(x!=y);
}

{
  // JS Comparisons Exercise 4
  var age = n;
var voteable = (age<18)?"Too young":"Old enough";
alert(voteable);
}

{
  // JS Conditions Exercise 1
  if(x > y) 
{
  alert("Hello World");
}
}

{
// JS Conditions Exercise 2
if(x>y) {
 alert("Hello World");
} else{
 alert("Goodbye");
}
}

{
  // JS Switch Exercise 1
switch
(fruits) {
  case
 "Banana":
    alert("Hello")
    break;
  case
 "Apple":
    alert("Welcome")
    break;    
}
}

{
  // JS Switch Exercise 2
  switch(fruits) {
    case "Banana":
      alert("Hello")
      break;
    case "Apple":
      alert("Welcome")
      break;
  default:
   alert("Neither");
  }
}

{
  // JS For Loops Exercise 1
let i;
for(i=0;i<10;i++) {
  console.log(i);
}
}

{
  // JS For Loops Exercise 2
  const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x);
}
}

{
  // JS While Loops Exercise 1
  let i = 0;
while(i<10) {
  console.log(i);
  i++
}
}

{
  // JS While Loops Exercise 2
  let i = 0;
while (i < 10) {
  console.log(i);
  i=i+2;
}
}

{
  // JS Break Loops Exercise 1
  for (i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {
  break;
  }
  }
}

{
  // JS Break Loops Exercise 2
  for (i = 0; i < 10; i++) {
    if (i == 5) {
  continue;
    }
    console.log(i);
  }
 
}

{
  // JS HTML DOM Exercise 1
  <p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello";
</script>

}

{
  // JS HTML DOM Exercise 2
  <p id="demo"></p>
<script>
document.getElementsByTagName("p")[0].innerHTML = "Hello";
</script>
}

{
   // JS HTML DOM Exercise 3
   <p class="test"></p>
<p class="test"></p>
<script>
document.getElementsByClassName("test")[0].innerHTML
 = "Hello";
</script>
}

{
  // JS HTML DOM Exercise 4
  <img id="image" src="smiley.gif">
<script>
document.getElementById("image").src = "pic_mountain.jpg";
</script>
}

{
  // JS HTML DOM Exercise 5
  <input type="text" id="myText" value="Hello">
  <script>
  document.getElementById("myText").value= "Have a nice day!";
  </script>
}

{
// JS HTML DOM Exercise 6
<p id="demo"></p>
<script>
document.getElementById("demo").style.color= "red";
</script>
}

{
  // JS HTML DOM Exercise 7
  <p id="demo"></p>
  <script>
  document.getElementById("demo").style.fontSize = "40px";
  </script>
}

{
  // JS HTML DOM Exercise 8
  <p id="demo"></p>
  <script>
  document.getElementById("demo").style.display= "none";
  </script>
}

{
  //JS HTML DOM Exercise 9
  <button id="demo">Click me1</button>
  <script>
  document.getElementById("demo").addEventListener("click", myFunction);
  </script>
}