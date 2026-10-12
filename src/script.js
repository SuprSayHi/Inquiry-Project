let inputText = document.getElementById("input");
let outputText = document.getElementById("output");

inputText.addEventListener("input", (event) => {
    outputText.value = runLengthEncode(input.value);
});


/**
 * Run Length Encoding
 * 
 * @param {string} input 
 * @returns {string}
 */
function runLengthEncode(input) {
    let words = "";
    let prevCharacter = "";
    let numOccurances = 0;
    
    for (let i = 0; i < input.length; i++) {
        let character = input.charAt(i);

        if (prevCharacter === character) {
            numOccurances++;
        } else {
            words += (numOccurances > 1 ? numOccurances : "") + character
        }

        prevCharacter = character;
    }

    return words;
}
