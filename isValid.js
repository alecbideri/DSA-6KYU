function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/;

    return passwordRegex.test(password);
}

console.log(isValidPassword('123Abc'));