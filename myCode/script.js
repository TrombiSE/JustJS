
var myHeading = document.querySelector('h1');



var number1 = 10;
var number2 = 15;
var string1 = "Что-то";
var daIliNet = true;
var list = [1,"fds","4to?!",15];
var summa = "uafafdafsdfsd";



// if(summa === 25){
//   myHeading.textContent = "да";
// }
// else if(summa === 150){
//     myHeading.textContent = "Umnoshil";
// }
// else if(summa === -5){
//     myHeading.textContent = "Tut minus";
// }
// else if(summa === "ukjyhgf"){
//     myHeading.textContent = "Ttt";
// }
// else{
//     console.log("НЕТ");
// }

function umnoshit(num1,num2){
  var otvet = num1*num2;
  return otvet;
}

console.log(umnoshit(7,7));
console.log(umnoshit(89,54));





function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
console.log(factorialize(10));



// var menu = {
//   width: 300,
//   height: 200,
//   title: "Menu"
// };

// for (var key in menu) {
//   console.log( "Ключ: " + key + " значение: " + menu[key] );
// }


// var obj = {a:1, b:2, c:3};
    
// for (var prop in obj) {
//   console.log("obj." + prop + " = " + obj[prop]);
// }


// var menu = {
//   width: 300,
//   height: 200,
//   title: "Menu"
// };

// var counter = 0;

// for (var key in menu) {
//   counter++;
// }

// console.log( "Всего свойств: " + counter );


// var user = {
//   name: "Abdr",
//   surname: "Niyaz"
// };
// user.age = 25;

// for (var prop in user) {
//   console.log( prop ); 
// }