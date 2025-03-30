// Function to validate password
function isValidPassword(username, password) {
    const passwordRegex = /^(?!.*\s).{8,}$/; // Regex no spaces and minumum 8 characters

    if (!passwordRegex.test(password)) {
        return false;
    }

    if (password.includes(username)) {
        return false;
    }

    return true;
}

// Function to validate the form when submitted
function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    const confirmationMessage = document.getElementById("confirmation-message");

    // Call the isValidPassword function to check if password is valid
    if (!isValidPassword(username, password)) {
        errorMessage.textContent = "Password must be at least 8 characters long, contain no spaces, and can not include your username.";
        confirmationMessage.textContent = "";
        return false; 
    }

    errorMessage.textContent = "";
    confirmationMessage.textContent = `Hello ${username.toUpperCase()}, welcome to the club!`;
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    return true; 
}