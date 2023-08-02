/**
 * Transliterates Syriac
 *
 * @param {string} input Syriac text to transliterate
 * @returns {string} a transliterated string
 */
function transliterateSyriacToHebrew(input) {
	// Syriac consonants (letters) and their corresponding Hebrew characters
	const syriacToHebrewMap = {
		"\u0710": "\u05D0", // Syriac Alaph -> Hebrew Alef
		"\u0712": "\u05D1", // Syriac Beth -> Hebrew Bet
		"\u0713": "\u05D2", // Syriac Gamal -> Hebrew Gimel
		"\u0714": "\u05D2", // Syriac Gamal Garshuni -> Hebrew Gimel
		"\u0715": "\u05D3", // Syriac Dalath -> Hebrew Dalath
		"\u0716": "\u05D3", // Syriac Dalath Rish -> Hebrew Dalath
		"\u0717": "\u05D4", // Syriac He -> Hebrew He
		"\u0718": "\u05D5", // Syriac Waw -> Hebrew Vav
		"\u0719": "\u05D6", // Syriac Zain -> Hebrew Zayin
		"\u071A": "\u05D7", // Syriac Heth -> Hebrew Het Syriac Teth -> Hebrew Tet
		"\u071B": "\u05D8", // Syriac Teth -> Hebrew Tet
		"\u071C": "\u05D8", // Syriac Teth Garshuni -> Hebrew Tet
		"\u071D": "\u05D9", // Syriac Yudh -> Hebrew Yod
		"\u071F": "\u05DB", // Syriac Kaph -> Hebrew Kaf
		"\u0720": "\u05DC", // Syriac Lamadh -> Hebrew Lamed
		"\u0721": "\u05DE", // Syriac Mim -> Hebrew Mem
		"\u0722": "\u05E0", // Syriac Nun -> Hebrew Nun
		"\u0723": "\u05E1", // Syriac Semkath -> Hebrew Samekh
		"\u0724": "\u05E1", // Syriac Semkath -> Hebrew Samekh
		"\u0725": "\u05E2", // Syriac E -> Hebrew Final Nun
		"\u0726": "\u05E4", // Syriac Pe -> Hebrew Pe
		"\u0727": "\u05E4", // Syriac Reversed Pe -> Hebrew Pe
		"\u0728": "\u05E6", // Syriac Sadhe -> Hebrew Tsadi
		"\u0729": "\u05E7", // Syriac Qaph -> Hebrew Qof
		"\u072A": "\u05E8", // Syriac Rish -> Hebrew Resh
		"\u072B": "\u05E9", // Syriac Taw -> Hebrew Dalath
		"\u072C": "\u05EA", // Syriac Taw -> Hebrew Dalath
	};

	const filteredInput = input
		.split("")
		.filter((char) => Object.keys(syriacToHebrewMap).includes(char))
		.join("");

	const transliteratedString = filteredInput
		.split("")
		.map((char) => syriacToHebrewMap[char])
		.join("");

	return transliteratedString;
}

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
	output.value = transliterateSyriacToHebrew(input.value);
});
