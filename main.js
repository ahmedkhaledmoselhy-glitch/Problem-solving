// Question(1)

// var userName = prompt("Enter your first name");
// var userAge = prompt("Enter your age");
// var birthYear = 2026 - userAge;
// console.log(
//   "Hello " +
//     userName +
//     " You are " +
//     userAge +
//     " years old " +
//     " and you were born around " +
//     birthYear,
// );

// Question(2)

// var USD = 47.22;
// var EUR = 54.35;
// var GBP = 61.95;
// var EGP = Number(prompt("Enter Amount in EGP"));
// console.log(
//   EGP +
//     " EGP = " +
//     "$" +
//     (EGP / USD).toFixed(2) +
//     " USD " +
//     "€" +
//     (EGP / EUR).toFixed(2) +
//     " EUR " +
//     "£" +
//     (EGP / GBP).toFixed(2) +
//     " GBP",
// );

// Question(3)

// var number = Number(prompt("Enter a number"));
// if (number % 2 === 0) {
//   console.log(number + " is an even number ");
// } else {
//   console.log(number + " is an odd number ");
// }

// Question(4)

// var hour = Number(prompt("Enter the hour in 24-hour format (0 to 23)"));

// if (hour >= 0 && hour <= 23) {
//   if (hour <= 11) {
//     console.log("Good Morning");
//   } else if (hour <= 17) {
//     console.log("Good Afternoon");
//   } else {
//     console.log("Good Evening");
//   }
// } else {
//   console.log("Invalid hour");
// }
// Question(5)

// var score1 = Number(prompt("Enter your first score"));
// var score2 = Number(prompt("Enter your second score"));
// var score3 = Number(prompt("Enter your third score"));
// var average = (score1 + score2 + score3) / 3;
// if (average >= 50) {
//   console.log("Average: " + average + " Status: Pass");
// } else {
//   console.log("Average: " + average + " Status: Fail");
// }

// Question (6)

// var firstNumber = Number(prompt("Enter the first number"));
// var operator = prompt(" Choose one of these (+, -, *, / )");
// var secondNumber = Number(prompt("Enter the second number"));

// switch (operator) {
//   case "+":
//     var result = firstNumber + secondNumber;
//     console.log(firstNumber + " + " + secondNumber + " = " + result);

//     break;

//   case "-":
//     var result = firstNumber - secondNumber;
//     console.log(firstNumber + " - " + secondNumber + " = " + result);

//     break;

//   case "*":
//     var result = firstNumber * secondNumber;
//     console.log(firstNumber + " * " + secondNumber + " = " + result);

//     break;

//   case "/":
//     if (secondNumber === 0) {
//       console.log("Cannot divide by zero");
//     } else {
//       var result = firstNumber / secondNumber;

//       console.log(firstNumber + " / " + secondNumber + " = " + result);
//     }
//     break;

//   default:
//     console.log("Invalid operator! Please choose +, -, *, or /.");

//     break;
// }

// Question (7)

// var num = Number(prompt ("Enter a number"))
//  for (var i = 1;  i<= 10  ; i++ ) {
//     var result = num * i
// console.log(num + " x " + i + " = " + result) ;

// }

// Question (8)

//  for (var even = 2 ; even <= 10 ; even = even + 2 ) {

// console.log(even) ;

// }

// Question (9)

// var result =1

// for( var i = 5;  i >= 1     ;  i-- ){

//     result = result * i;

// }

// console.log(result);

// Question (10)

// var num = 1;

// while (num * num <= 50) {
//     num++;
// }

// console.log(num);

// Question (11)

// var num1 = Number(prompt("Enter the first number"));
// var num2 = Number(prompt("Enter the second number"));

// num1 = num1 + num2;
// num2 = num1 - num2;
// num1 = num1 - num2;

// console.log(num1);
// console.log(num2);

// Question (12)

// var age = Number(prompt("Enter your age"));
// var ticket = prompt("Do you have a ticket? (yes/no)").toLowerCase().trim();

// if (age >= 18 || ticket == "yes") {
//      console.log("You are allowed to enter")
// } else {
//     console.log("You are not allowed to enter ");

// }

// Question (13)

// var num1 = Number(prompt("Enter first number"))
// var num2 = Number(prompt("Enter second number"))
// var num3 = Number(prompt("Enter third number"))

// if (num1 > num2) {

//     if (num3 > num1) {

//         console.log("Largest number is: " + num3);

//     } else  console.log("Largest number is: " + num1);

// } else {

//     if (num3 > num2) {

//          console.log("Largest number is: " + num3);

//     } else console.log("Largest number is: " + num2);

// }

// Question (14)

// var hours = Number(prompt("Enter hours worked"));
// var rate = Number(prompt("Enter your hourly rate"));
// var regular;
// var total;
// var overtime;
// var overtimePay = 0;

// if (hours <= 40) {
//   regular = hours * rate;

//   total = regular;
// } else {
//   regular = 40 * rate;

//   overtime = hours - 40;

//   overtimePay = overtime * rate * 1.5;

//   total = regular + overtimePay;
// }

// console.log(
//   "Regular Pay: " +
//     regular +
//     " | Overtime Pay: " +
//     overtimePay +
//     " | Total Pay: " +
//     total,
// );

// Question (15)

// var weight = Number(prompt("Enter your weight in kg"));
// var height = Number(prompt("Enter your height in meters"));
// var bmi = weight / (height * height);
// var category;

// if (bmi<18.5) {
//    category = "Under weight"

// } else {
//     if  (bmi>=18.5 && (bmi<25))  {

//         category = "Normal weight"

//     } else {

// if  (bmi>=25 && (bmi<30))  {

//           category = "Over weight"

//     } else {
//           category = "Obese"
//     }

// }

// }

// console.log("BMI: " + bmi.toFixed(2) + " Category: " + category);

// Question (16)

// var purchaseAmount = Number(prompt("Enter the purchase amount"));
// var taxes = purchaseAmount * 0.1;
// var discount;

// if (purchaseAmount > 100) {
//   discount = purchaseAmount * 0.05;
// } else {
//   discount = purchaseAmount * 0;
// }

// var finalPrice = purchaseAmount + taxes - discount;

// console.log(
//   "subtotal: " +
//     purchaseAmount +
//     " Tax: " +
//     taxes +
//     " Discount: " +
//     discount +
//     " Final: " +
//     finalPrice,
// );

// Question (17)

// var operation = Number(
//   prompt("Choose an operation: 1 = Balance, 2 = Withdraw, 3 = Deposit"),
// );

// var currentBalance = Number(prompt("Enter your current balance"));

// switch (operation) {
//   case 1:
//     console.log("Your balance is: " + " $" + currentBalance);

//     break;

//   case 2:
//     var amount = Number(prompt("Enter the amount"));

//     console.log(
//       "Withdrew: " +
//         " $" +
//         amount +
//         " New balance: " +
//         " $" +
//         (currentBalance - amount),
//     );

//     break;

//   case 3:
//     var amount = Number(prompt("Enter the amount"));

//     console.log(
//       "Deposited: " +
//         " $" +
//         amount +
//         " New balance: " +
//         " $" +
//         (currentBalance + amount),
//     );

//     break;

//   default:
//     console.log("The operation is invalid");

//     break;
// }

// Question (18)

// for (var num = 1; num <= 100; num++) {

//   if (num % 3 == 0 && num % 5 == 0) {

//     console.log("FizzBuzz");

//   } else if (num % 3 == 0) {

//     console.log("Fizz");

//   } else if (num % 5 == 0) {

//     console.log("Buzz");

//   } else {

//     console.log(num);

//   }
// }

// Question (19)

// var rows = Number(prompt("Enter the number of rows"));

// for (var i = 1; i <= rows; i++) {
//   var stars = "";

//   for (var j = 1; j <= i; j++) {
//     stars = stars + "*";
//   }
//   console.log(stars);
// }

// Question (20)

// var num = Math.abs(prompt("Enter a number")).toString();
// var sum = 0;

// for (var i = 0; i < num.length; i++) {

// sum = sum + Number(num[i])
// }

// console.log(sum);
