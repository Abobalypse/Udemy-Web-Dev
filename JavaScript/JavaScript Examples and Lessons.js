//Capitalise the first letter in name, lowercase for the rest

//1 Create a var that stores the name that user enters via prompt
var name = prompt("What is your name?");

//2 Capitalise the first letter of that name

//a isolate the first char
var firstChar = name.slice(0, 1);

//b turn first char into uppercase
var upperCaseFirstChar = firstChar.toUpperCase();

//c isolate the rest of name
var restOfName = name.slice(1, name.length);

//fix uppercase bug
restOfName = restOfName.toLowerCase();

//d concatenate the firstchar with the rest of name
var capitalisedName = upperCaseFirstChar + restOfName;

//3 Concatenate a greeting with name
alert("Hello, " + capitalisedName);

//Dog Age calculator

//1 Determine what current dog age is through prompt
var dogAge = prompt("How old is your dog?");

//2 Calculate dog age in human years through formula
var humanAge = (dogAge - 2) * 4 + 21;

//var user know how old dog is in human years through alert
alert("Your dog is " + humanAge + " years old in human years!");

//

//Buy bottles of milk with money

function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  var numberOfBottles = Math.floor(money / 1.5);
  console.log("buy " + numberOfBottles + " bottles of milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(10);

//Life in weeks coding exercise

function lifeInWeeks(age) {
  var daysLeft = (90 - age) * 365;
  var weeksLeft = (90 - age) * 52;
  var monthsLeft = (90 - age) * 12;

  console.log(
    "You have " +
      daysLeft +
      " days, " +
      weeksLeft +
      " weeks, and " +
      monthsLeft +
      " months remaining in your life."
  );
}

lifeInWeeks(32);

function getMilk(money, costPerBottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return calcChange(money, 2.5);
}

function calcBottles(startingMoney, costPerBottle) {
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
  var change = startingAmount % costPerBottle;
  return change;
}

console.log("Hello Jenkins, here is your " + getMilk(5, 1.5) + " change.");

//BMI Calculator

function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  return Math.round(bmi);
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);

//Love Calculator
//Random Number Generator

function loveCalculator() {
  prompt("What is your name?");
  prompt("What is your crushes name?");

  var num = Math.random() * 100;
  num = Math.floor(num) + 1;

  if (num > 70) {
    alert(
      "Your love score is " +
        num +
        "%." +
        " You love each other like Kanye loves Kanye"
    );
  }

  if (num > 30 && num <= 70) {
    alert(
      "Your love score is " +
        num +
        "%." +
        " You two go together like peanut butter and jelly"
    );
  }

  if (num <= 30) {
    alert(
      "Your love score is " +
        num +
        "%." +
        " Don't count on things working out so much"
    );
  }
}

loveCalculator();

//Advanced BMI Calculator

function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / Math.pow(height, 2));
  var interpretation;

  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  }

  if (bmi >= 18.5 && bmi < 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  }

  if (bmi > 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }

  return interpretation;
}

//Is it a Leap Year?

function isLeap(year) {
   if (year % 4 === 0) {
      if (year % 100 === 0) {
         if (year % 400 === 0) {
            return "Leap year.";
         } else {
            return "Not leap year.";
         }
      } else {
         return "Leap year.";
      }
   } else {
      return "Not leap year.";
   }
}

isLeap(2100);


//FIZZBUZZ !--Important--!

var guestList = ["Jim", "Joe", "Jason", "Jeremy", "John"];

var guest = prompt("What is your name");

if (guestList.includes(guest)) {
    alert ("Welcome!");
} else {
    alert ("Not welcome!");
}


//FIZZBUZZ !--Important--!


var output = [];
var count = 1;

function fizzBuzz() {
    
    while(count <= 100) {

        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }

        count++;
    }

    console.log(output);
}



//Whos Buying Lunch?

function whosPaying(names) {
    
   var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
   var people = names.length;
   var randomNamePosition = Math.floor(Math.random() * people);
   var randomName = names[randomNamePosition];
   
   return (randomName + " is going to buy lunch today!");
   
}

whosPaying();




//Beer Song

function beerSong() {
  var bottles;
  var bottlesLeft;

  for(i = 99; i >= 1; i--) {
      if (i == 1) {
          bottles = "bottle";
          bottlesLeft = "No more bottles of beer on the wall";
      } else {
          bottles = "bottles";
          bottlesLeft = i - 1 + " bottles of beer on the wall";
      } 
      console.log(i + " " + bottles + " of beer on the wall");
      console.log("Take one down, pass it around,");
      console.log(bottlesLeft);
  }
}

console.log(beerSong());


//Fibonacci Generator

function fibonacciCode(n) {
  var output = [];
  if (n === 1) {
      output = [0];
  } else if (n === 2) {
      output = [0, 1];
  } else {
      output = [0, 1];
      
      for (var i = 2; i < n; i++) {
          output.push(output[output.length - 2] + output[output.length - 1]);
      }
  }


  return output;
}

output = fibonacciCode(10);
console.log(output);
//Expected output = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].


//Leap Year

function isLeap(year) {
  if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
            return "Leap year";
        }  else {
            return "Not leap year";
        }
      } else {
          return "Leap year";
      }
  } else {
      return "Not leap year";
  }
}

isLeap(2100);

// Arrays/Collections

let guestList = ["Leo", "June", "Bob", "Nicole", "Harper"];

let guestName = prompt("What is your name?");

  if (guestList.includes(guestName)) {
    alert ("Welcome");
  } else {
    alert ("Sorry, maybe next time!");
  }


//While Loops

var  i = 1;

while (i < 2) {
  console.log(i);       
  i++;
}
//While loops check for a state, while something is "true"


// For Loops

for (i = 0; i < 2; i++) {
  console.log(i);
}

//For loops iterate, run a piece of code multiple times


//Fibonacci Code Challenge

