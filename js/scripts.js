//business logic
var firstNumber = "";
var secondNumber = "";

//front end logic
$(document).ready(function(){

$(".number").click(function(){
  var number = $(this).val().toString();
  firstNumber += number;
  console.log(firstNumber);
})
});
