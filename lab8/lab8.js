function getDataFromForm() {
    alert("it worked!");

    // Obtain first name and last name from form elements
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;

    // Call runAjax and send the two strings as arguments
    runAjax(firstName, lastName);
}

function runAjax(fname, lname) {
    // Create an XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Define the URL for the AJAX request (adjust the path as needed)
    const url = "./ajax.php";

    // Construct the URL with the first name and last name as query parameters
    const fullUrl = `${url}?fname=${fname}&lname=${lname}`;

    // Open a GET request to the URL
    xhr.open("GET", fullUrl, true);

    // Set up a callback function for when the request completes
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Check if the response is a string
            if (typeof xhr.responseText === "string") {
                // Change the text of the paragraph element with the id "responseString"
                document.getElementById("responseString").textContent = xhr.responseText;
            }
        }
    };

    // Send the AJAX request
    xhr.send();
}

