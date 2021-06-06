function isNumber(key) {
	const chr = (key.which) ? key.which : key.keyCode;
	return (chr <= 57) || (chr === 189);
} 
