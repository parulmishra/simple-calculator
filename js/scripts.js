//business logic
var firstNumber = "";
var secondNumber = "";
var operator = "";
var operatorSelected = false;
var result = 0;

function add(num1, num2)
{
	return num1+num2;
}
function sub(num1, num2)
{
	return num1-num2;
}
function mul(num1, num2)
{
	return num1*num2;
}
function div(num1, num2)
{
	return num1/num2;
}
//front end logic
$(document).ready(function(){

	$(".number").click(function(){
	var number = $(this).val().toString();
	if(operatorSelected === false)
	{
		firstNumber += number;
		$("#result").html(firstNumber);
		$("#history").html(firstNumber);
		//console.log(firstNumber);
	}
    else
    {
		secondNumber += number;
		$("#result").html(secondNumber);
		$("#history").html(firstNumber + " " + operator + " " + secondNumber);
		//console.log(secondNumber);
    }
	});

		$(".operation").click(function(){
		operator = $(this).val().toString();
		$("#history").html(firstNumber + " " + operator);
		operatorSelected = true;
		//console.log(operator);
});

	$(".equals").click(function(){
		console.log(parseInt(firstNumber));
		console.log(parseInt(secondNumber));
		console.log(operator);
		if(operator === "ADD")
		result = add(parseInt(firstNumber), parseInt(secondNumber));
		else if(operator === "SUB")
		result = sub(parseInt(firstNumber), parseInt(secondNumber)); 
		else if(operator === "MUL")
		result = mul(parseInt(firstNumber), parseInt(secondNumber)); 
		else if(operator === "DIV")
		result = div(parseInt(firstNumber), parseInt(secondNumber)); 
		//console.log(result);
		$("#result").html(result);
  });

});
