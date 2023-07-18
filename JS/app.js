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
  
    '<div class="output-container">' + 
      '<textarea readonly id="input-text" class="textarea-output">' +
        resultEncrypt +
      '</textarea>' +
      '<button onclick="copyOutput()" class="output-container__btn-copy buttons--white">copiar</button>' +
    '</div>';
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
    
  '<div class="output-container">' + 
  '<textarea readonly id="input-text" class="textarea-output">' +
    resultDecrypt +
  '</textarea>' +
  '<button onclick="copyOutput()" class="output-container__btn-copy buttons--white">copiar</button>' +
'</div>';
}

//Funcion de copiado
function copyOutput() {
  let copyText = document.querySelector(".textarea-output");

  copyText.select();
  copyText.setSelectionRange(0, 99999); //solución de error para firefox
  document.execCommand("copy");
  alert("Texto copiado :)")
}