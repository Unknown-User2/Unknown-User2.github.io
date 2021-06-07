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
	getVals()
	check()
}

function check() {
	switch(side0Val + "|" +  side1Val) {
		// RF to ...
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
		// kRF to ...
		case "krf|rf":
			output.value = bigRFToRF(side0Val, inputVal)
			break
		case "krf|krf":
			sameConvert()
			break
		case "krf|mrf":
			output.value = inputVal / 1000
			break
		case "krf|grf":
			output.value = inputVal / 1000000
			break
		case "krf|eu":
			output.value = bigRFToRF(side0Val, inputVal) / 4
			break
		case "krf|j":
			output.value = bigRFToRF(side0Val, inputVal) * 2.5
			break
		case "krf|mj":
			output.value = bigRFToRF(side0Val, inputVal) / 10
			break
		// mRF to ..
		case "mrf|rf":
			output.value = bigRFToRF(side0Val, inputVal)
			break
		case "mrf|krf":
			output.value = inputVal * 1000
			break
		case "mrf|mrf":
			output.value = sameConvert()
			break
		case "mrf|grf":
			output.value = inputVal / 1000000
			break
		case "mrf|eu":
			output.value = bigRFToRF(side0Val, inputVal) / 4
			break
		case "mrf|j":
			output.value = bigRFToRF(side0Val, inputVal) * 2.5
			break
		case "mrf|mj":
			output.value = bigRFToRF(side0Val, inputVal) / 10
			break
		// gRF to ...
		case "grf|rf":
			output.value =  bigRFToRF(side0Val, inputVal)	
			break
		case "grf|krf":
			output.value = inputVal * 1000000
			break
		case "grf|mrf":
			output.value = inputVal * 1000
			break
		case "grf|grf":
			sameConvert()
			break
		case "grf|eu":
			output.value = bigRFToRF(side0Val, inputVal) / 4
			break
		case "grf|j":
			output.value = bigRFToRF(side0Val, inputVal) * 2.5
			break
		case "grf|mj":
			output.value = bigRFToRF(side0Val, inputVal) / 10
			break
		// EU to ...
		case "eu|rf":
			output.value = inputVal * 4
			break
		case "eu|krf":
			output.value = (inputVal * 4) / 1000
			break
		case "eu|mrf":
			output.value = (inputVal * 4) / 1000000
			break
		case "eu|grf":
			output.value = (inputVal * 4) / 1000000000
			break
		case "eu|eu":
			sameConvert()
			break
		case "eu|j":
			output.value = inputVal * 10
			break
		case "eu|mj":
			output.value = inputVal / 2.5
			break
		// J to ...
		case "j|rf":
			output.value = inputVal / 2.5
			break
		case "j|krf":
			output.value = (inputVal / 2.5) / 1000
			break
		case "j|mrf":
			output.value = (inputVal / 2.5) / 1000000
			break
		case "j|grf":
			output.value = (inputVal / 2.5) / 1000000000
			break
		case "j|eu":
			output.value = inputVal / 10
			break
		case "j|j":
			sameConvert()
			break
		case "j|mj":
			output.value = inputVal / 25
			break
		// MJ to ...
		case "mj|rf":
			output.value = inputVal * 10
			break
		case "mj|krf":
			output.value = (inputVal * 10) / 1000
			break
		case "mj|mrf":
			output.value = (inputVal * 10) / 1000000
			break
		case "mj|grf":
			output.value = (inputVal * 10) / 1000000000
			break
		case "mj|eu":
			output.value = inputVal * 2.5
			break
		case "mj|j":
			output.value = inputVal * 25
			break
		case "mj|mj":
			sameConvert()
			break
		default:
			console.error("Invaild choices for energy type from function check()")
	}
}

// for converting when things are the same
function sameConvert() {
	output.value = inputVal
}

// converts kRF, mRF or gRF to RF
function bigRFToRF(unit, val) {
	switch(unit) {
		case "krf":
			return val * 1000
			break
		case "mrf":
			return val * 1000000
			break
		case "grf":
			return val * 1000000000
			break
		default:
			console.error("Invaild option for convertion for function sameConvert()")
			return "Invaild option for convertion for function sameConvert()"
			break
	}
}

function getVals() {
	side0Val = side0.value
	side1Val = side1.value
	inputVal = input.value
}
