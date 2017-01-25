var inputText : HTMLInputElement;
var submitButton : HTMLInputElement;

function checkForContent(){
    if (inputText.value != ''){
        submitButton.removeAttribute('disabled');
    }else{
        submitButton.setAttribute('disabled', 'true');
    }
}

window.onload = () => {
    inputText = <HTMLInputElement>document.getElementById('inputID');
    submitButton = <HTMLInputElement>document.getElementById('submitID');
    inputText.addEventListener('keyup', checkForContent);
    inputText.addEventListener('blur', checkForContent);
};