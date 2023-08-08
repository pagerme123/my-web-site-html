

function verifyPassword() {
    const enteredPassword = prompt("Please enter the password:");
    const correctPassword = "Bigballs@69";

    if (enteredPassword !== null) {
        if (enteredPassword === correctPassword) {
            console.log("Access granted! You entered the correct password.");
        } else {
            console.log("Access denied! Incorrect password.");
            window.location.href = "index.html";
        }
    } else {
        console.log("Access denied! No password entered.");
    }
}

verifyPassword();