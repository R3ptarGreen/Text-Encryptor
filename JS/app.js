const inputText = document.querySelector("#input-text");
const outputText = document.querySelector("#output-text");

function encrypt() {
    let text = inputText.value;
    let resultEncrypt = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById("output-text").innerHTML = '<textarea readonly id="input-text" class="textarea-output">' + resultEncrypt + '</textarea>';
}

function decrypt() {
    let text = inputText.value;
    let resultDecrypt = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("output-text").innerHTML = '<textarea readonly id="input-text" class="textarea-output">' + resultDecrypt + '</textarea>';
}