// keyboard characters
const characters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"~",
	"`",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"{",
	"[",
	"}",
	"]",
	",",
	"|",
	":",
	";",
	"<",
	">",
	".",
	"?",
	"/",
];

// elements
const btnEl = document.querySelector(".btn-cta");
const pw1 = document.querySelector(".password-1");
const pw2 = document.querySelector(".password-2");
const loader = document.querySelector(".loading");
const submitForm = document.querySelector(".form-submit");
const inputLength = document.querySelector(".input-length");
const toolTip1 = document.querySelector(".tooltip-1");
const toolTip2 = document.querySelector(".tooltip-2");
const clearData = document.querySelector(".clear-data");

// global states (accessible across js file)
let passwordLength = 6;
let includeNumbers = true;
let includeSymbols = true;

// States
let loading = false;

// filter element
const numberFilter = document.getElementById(
	"filter-numbers"
);
const symbolFilter = document.getElementById(
	"filter-symbols"
);

// checkbox events
//  * setter functions for inputs

numberFilter.addEventListener("change", function (e) {
	includeNumbers = e.target.checked;
});

symbolFilter.addEventListener("change", function (e) {
	includeSymbols = e.target.checked;
});

// onchange event
inputLength.addEventListener("change", function (e) {
	passwordLength = e.target.value;
});

// submit event
submitForm.addEventListener("submit", function (e) {
	e.preventDefault();

	loading = true;
	let randomPasswordOne =
		getRandomPassword(passwordLength);
	let randomPasswordTwo =
		getRandomPassword(passwordLength);

	showLoader();

	setTimeout(function () {
		loading = false;
		showLoader();
		pw1.textContent = randomPasswordOne;
		pw2.textContent = randomPasswordTwo;
	}, 2000);
});

// utility functions
function getRandomArrIndex(arrLength) {
	let randomIndex = Math.floor(Math.random() * arrLength);
	return randomIndex;
}

function showLoader() {
	if (loading) {
		loader.classList.add("show-loader");
	} else {
		loader.classList.remove("show-loader");
	}
}

function clipboardTimeout(tooltip) {
	setTimeout(function () {
		tooltip.textContent = "Copy to Clipboard";
	}, 5000);
}

// filter main characters array

function filterNumbers(arr) {
	let numberArr = [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
	];
	return arr.filter((char) => !numberArr.includes(char));
}

function filterSymbols(arr) {
	let symbolArr = [
		"~",
		"`",
		"!",
		"@",
		"#",
		"$",
		"%",
		"^",
		"&",
		"*",
		"(",
		")",
		"_",
		"-",
		"+",
		"=",
		"{",
		"[",
		"}",
		"]",
		",",
		"|",
		":",
		";",
		"<",
		">",
		".",
		"?",
		"/",
	];
	return arr.filter((char) => !symbolArr.includes(char));
}

function filterCharacter(arr) {
	if (!includeNumbers && !includeSymbols) {
		// composition - means output of one is input of another
		let filterOne = filterNumbers(arr);
		let result = filterSymbols(filterOne);
		return result;
	} else if (!includeNumbers) {
		let result = filterNumbers(arr);
		return result;
	} else if (!includeSymbols) {
		let result = filterSymbols(arr);
		return result;
	} else {
		return arr;
	}
}

// password generator
function getRandomPassword(passLength) {
	let newPassword = "";
	let filteredArr = filterCharacter(characters);
	for (let i = 0; i < passLength; i++) {
		newPassword +=
			filteredArr[
				getRandomArrIndex(filteredArr.length)
			];
	}
	return newPassword;
}

// click to copy
// * bug promise error
pw1.addEventListener("click", function () {
	
	// bug - promise error
	// navigator.clipboard.writeText(pw1.textContent);
	
	// workaround
	textToClipboard(pw1.textContent)
		
	toolTip1.textContent = "Copied!";
	clipboardTimeout(toolTip1);
});

pw2.addEventListener("click", function () {
	textToClipboard(pw2.textContent)
	toolTip2.textContent = "Copied!";
	clipboardTimeout(toolTip2);
});


function textToClipboard(text) {
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
// clear data
clearData.addEventListener("click", function () {
	pw1.textContent = "";
	pw2.textContent = "";
	inputLength.value = null;
	toolTip1.textContent = "Copy to Clipboard";
	toolTip2.textContent = "Copy to Clipboard";
});
