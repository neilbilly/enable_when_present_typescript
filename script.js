var inputText;
var submitButton;
function checkForContent() {
    console.log(inputText.value);
    if (inputText.value != '') {
        submitButton.removeAttribute('disabled');
    }
    else {
        submitButton.setAttribute('disabled', 'true');
    }
}
window.onload = function () {
    inputText = document.getElementById('inputID');
    submitButton = document.getElementById('submitID');
    inputText.addEventListener("keyup", checkForContent);
    inputText.addEventListener("blur", checkForContent);
};
