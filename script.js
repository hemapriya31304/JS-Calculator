const displayBlock = document.getElementById('displayBlock');
function display(input) {
    displayBlock.value += input;
}
function Clear(){
    displayBlock.value = "" ;
}
function del() {
    displayBlock.value = displayBlock.value.slice(0, -1);
}
function calculate(){
    try {
        displayBlock.value = eval(displayBlock.value);
    } catch (error) {
        displayBlock.value = "Error";
    }
}

    