const passwordBox = document.getElementById("password");
const length = 8;

function generatePassword() {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    const allChars = uppercase + lowercase + numbers + specialChars;
    let password = '';

    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * allChars.length);
        // Math.random() : generates random floor num between 0 and 1 eg. 0.221523
        // Math.random() * allChars.length : 0.221523 * length(say 70) = 34.56789.
        // Math.floor : round off the num eg. for 34.56789, it would return 34.
        password += allChars[random];
    }
    passwordBox.value = password;
}
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}