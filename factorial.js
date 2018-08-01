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
	result2 = numberWithCommas(result);
	console.log('Result: ' + resultFormatted);
	console.log('Result2: ' + result2);
	var toDisplay = num + '! = ' + resultFormatted;
	if (num > 21) {
		toDisplay += ' or <br />' + num + '! = ' + result2;
	}
	document.getElementById("result").innerHTML=toDisplay;

	if ( result > Number.MAX_SAFE_INTEGER ) {
		document.getElementById("warning").innerHTML="This value is higher than JavaScript Max Safe Integer!<br />The highest Factorial number in Safe Integer range is smaller than 18.";
	}
}

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}