// JavaScript uses double-precision floating-point format numbers as specified in IEEE 754
// and can only safely represent numbers between -(2^53 - 1) and 2^53 - 1.
// 2^53-1 = 9,007,199,254,740,991 or ~9 quadrillion

function factorial(num) {
	var result = 1;
	console.log('User Input: ' + num);
	for (var i=1; i <= num; i++) {
		result *= i;
	}
	resultFormatted = result.toLocaleString();
	console.log('Result: ' + resultFormatted);
	var toDisplay = num + '! = ' + resultFormatted;
	document.getElementById("result").innerHTML=toDisplay;

	if ( result > Number.MAX_SAFE_INTEGER ) {
		document.getElementById("warning").innerHTML="This value is higher than JavaScript Max Safe Integer!<br />The highest Factorial number in Safe Integer range is smaller than 18.";
	}
}
