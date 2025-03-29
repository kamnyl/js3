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