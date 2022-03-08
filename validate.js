function validate() {
    const results = check(document.forms["genorator"]["numChps"].value);


}

function check() {
    return address.match(/^[0-9]+$/);
}