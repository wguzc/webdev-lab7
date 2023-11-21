<?php
// Name of the cookie
$cookieName = "cs4413";

// Value to be stored in the cookie
$cookieValue = "YourCookieValue";

// Expiration time (in seconds) - set to 1 week for example
$expirationTime = time() + (7 * 24 * 60 * 60);

// Check if the cookie is already set
if (isset($_COOKIE[$cookieName])) {
    echo "The cookie '$cookieName' is already set. Its value is: " . $_COOKIE[$cookieName];
} else {
    // Set the cookie
    setcookie($cookieName, $cookieValue, $expirationTime, "/"); // "/" means it's available for the entire domain
    
    echo "The cookie '$cookieName' has been set with the value: $cookieValue";
}
?>
