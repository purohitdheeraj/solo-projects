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
const passE1 = document.querySelector(".password-one");
const passE2 = document.querySelector(".password-two");
const loader = document.querySelector(".loading");
const submitForm = document.querySelector(".form-submit");
const inputLength = document.querySelector(".input-length");

// global variables
let passwordLength = 6;

// States
let loading = false;

// filter states
let includeNumbers = true;
let includeSymbols = true;


// filter element
const numberFilter = document.getElementById(
	"filter-numbers"
);
const symbolFilter = document.getElementById(
	"filter-symbols"
);


// checkbox events
numberFilter.addEventListener("change", function (e) {
	includeNumbers = e.target.checked;
	// console.log(includeNumbers);
});

symbolFilter.addEventListener("change", function (e) {
	includeSymbols = e.target.checked;
	// console.log(includeSymbols);
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
		passE1.textContent = randomPasswordOne;
		passE2.textContent = randomPasswordTwo;
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
