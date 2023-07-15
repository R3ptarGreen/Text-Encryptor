const inputText = document.querySelector("#input-text");
const outputText = document.querySelector("#output-text");
const defaultMessage = outputText.innerHTML;

//Función para encriptar
function encrypt() {
  let text = inputText.value.trim();
  let resultEncrypt = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    if (text === ""){
        outputText.innerHTML = defaultMessage;
        return;
    }
    
  outputText.innerHTML =
    '<textarea readonly id="input-text" class="textarea-output">' +
    resultEncrypt +
    "</textarea>";
}
//Función para desencriptar
function decrypt() {
  let text = inputText.value.trim();
  let resultDecrypt = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    if (text === ""){
        outputText.innerHTML = defaultMessage;
        return;
    }

  outputText.innerHTML =
    '<textarea readonly id="input-text" class="textarea-output">' +
    resultDecrypt +
    "</textarea>";
}