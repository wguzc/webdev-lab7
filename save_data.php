<?php
// Check if the form is submitted using POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the first and last names from the form
    $firstName = $_POST["first_name"];
    $lastName = $_POST["last_name"];

    $data = $firstName . " " . $lastName . "\n";

    $filePath = "path/to/non_public_folder/data.txt";

    $file = fopen($filePath, "a");

    fwrite($file, $data);

    // Close the file
    fclose($file);
}
?>
