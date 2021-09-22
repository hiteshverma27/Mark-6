var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector('#text-input');
var output = document.querySelector('#output');
var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(text){
    return serverURL+"?"+"text="+text
}

function errorMsg(){
    alert("Error occured while trying to reach server, probably we ran out of hourly allowed transaltion request limit, please try again after an hour.")
}

function clickHandle(){
    var inputText = textInput.value
    fetch(getTranslationURL(inputText))
    .then(Response=>Response.json())
    .then(json=>output.innerText=json.contents.translated)
    .catch(errorMsg)
}
btnTranslate.addEventListener("click", clickHandle)