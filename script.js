let myForm = document.forms.myForm;
let submitButton = document.getElementById('submitButton')
let output = {}

submitButton.onclick = function() {
    output.name = myForm.name.value;
    output.surname = myForm.surname.value;
    output.birthDate = myForm.birthDate.value;
    output.figure = myForm.figure.options[myForm.figure.selectedIndex].value;

    console.log(output)
};