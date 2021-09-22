var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector('#text-input');
var output = document.querySelector('#output');
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
function getTranslationURL(text){
    return serverURL+"?"+"text="+text
}

function errorMsg(){
    alert("Error occured while trying to reach server, please try again later.")
}

function clickHandle(){
    var inputText = textInput.value
    fetch(getTranslationURL(inputText))
    .then(Response=>Response.json())
    .then(json=>output.innerText=json.contents.translated)
    .catch(errorMsg)
}
btnTranslate.addEventListener("click", clickHandle)