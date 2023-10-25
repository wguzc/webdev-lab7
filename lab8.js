function getDataFromForm() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    runAjax(firstName, lastName);
}

function runAjax(fname, lname) {
    const xhr = new XMLHttpRequest();
    const url = "./ajax.php"; // Adjust the path to match your server setup
    const params = `fname=${fname}&lname=${lname}`;

    xhr.open("GET", `${url}?${params}`, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (typeof xhr.responseText === "string") {
                document.getElementById("responseString").textContent = xhr.responseText;
            }
        }
    };

    xhr.send();
}
