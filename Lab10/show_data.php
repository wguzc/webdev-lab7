<?php
$filePath = "path/to/non_public_folder/data.txt";

// Read the file into an array
$dataArray = file($filePath, FILE_IGNORE_NEW_LINES);

// Output the data in a table
echo "<table border='1'>";
echo "<tr><th>First Name</th><th>Last Name</th></tr>";

// Loop through the array and create table rows
foreach ($dataArray as $line) {
    list($firstName, $lastName) = explode(" ", $line);
    echo "<tr><td>$firstName</td><td>$lastName</td></tr>";
}

echo "</table>";
?>
