var inputText;
var submitButton;
function checkForContent() {
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
    inputText.addEventListener('keyup', checkForContent);
    inputText.addEventListener('blur', checkForContent);
};
