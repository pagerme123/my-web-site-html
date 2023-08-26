function redirectToIndex() {
    window.location.href = "index.html";
}

function verifyPassword() {
    const correctPassword = "Bigballs@69";

    // Prompt the user for a password
    const enteredPassword = prompt("Please enter the password:");

    // Handle different cases
    if (enteredPassword === null) {
        console.log("Access denied! No password entered.");
        redirectToIndex();
    } else if (enteredPassword === correctPassword) {
        console.log("Access granted! You entered the correct password.");
        // Continue with the rest of your code here
    } else {
        console.log("Access denied! Incorrect password.");
        redirectToIndex();
    }
}

verifyPassword();
