var result = document.getElementById("result");
result.onclick = function() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var selectcourse = document.getElementById("selectcourse").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    if (selectcourse === "bscs") {
        alert("Your name is" + " " +
            name + ". " +
            "Your birth date is" + " " +
            age + " and you select " +
            selectcourse + " course. " + "Your contact NO. is " + number + " with email " + email + ".")
    }
    if (selectcourse === "bsit") {
        alert("Your name is" + " " +
            name + ". " +
            "Your birth date is" + " " +
            age + " and you select " +
            selectcourse + " course. " + "Your contact NO. is " + number + " with email " + email + ".")
    }
    if (name || age || selectcourse || number || email === "") {
        alert("Please enter your data.");

    }
}