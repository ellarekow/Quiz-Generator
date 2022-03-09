function validate() {
    const chpResults = check(document.forms["gen"]["numChps"].value);

    getNotification(Boolean(chpResults), "numChps");

    if (chpResults)
        location.href = "./quiz.html";

}

function check(name) {
    return name.match(/^[0-9]+$/);
}

function getNotification(bool, id) {
    var label = document.getElementById("labelNotify" + id);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + id;
        label.setAttribute('class', 'error');

        label.innerHTML = "Please enter a valid number of chapters";
        document.getElementById(id).appendChild(label);
    }
}

function probIntake() {
    let chps = document.forms["gen"]["numChps"].value;

    for (let i = 0; i < chps; i++) {
        let textbox = document.getElementById("textArea" + i + 1);
        if (textbox == null) {
            textbox = document.createElement("input");
            textbox.id = "textArea" + i + 1;

            textbox.setAttribute("type", "number");
            document.getElementById("textArea" + i + 1).appendChild(textbox);
        }
    }

}