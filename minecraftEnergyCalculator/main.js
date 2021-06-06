var side0 = document.getElementById("side0")
var side1 = document.getElementById("side1")
var output = document.getElementById("output")
var input = document.getElementById("input")

var side0Val = side0.value
var side1Val = side1.value
var inputVal = input.value

// makes sure everything inputed is a number
function isNumber(key) {
	const chr = (key.which) ? key.which : key.keyCode;
	return (chr <= 57) || (chr === 189);
} 

// is called when a key goes up in the input 
function convert() {
	console.info("convert()")
	inputVal = input.value
	check()
}

function check() {
	switch(side0Val + "|" +  side1Val) {
		// rf to ...
		case "rf|rf":
			sameConvert()
			break
		case "rf|krf":
			output.value = inputVal / 1000
			break
		case "rf|mrf":
			output.value = inputVal / 1000000
			break
		case "rf|grf":
			output.value = inputVal / 1000000000
			break
		case "rf|eu":
			output.value = inputVal / 4
			break
		case "rf|j":
			output.value = inputVal * 2.5
			break
		case "rf|mj":
			output.value = inputVal / 10
			break
	}
}

// for converting when things are the same
function sameConvert() {
	output.value = inputVal
}

function getSide() {
	side0Val = side0.value
	side1Val = side1.value
}
