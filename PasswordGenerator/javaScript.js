const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("number");
const symbolInput = document.getElementById("symbols");

const getRandom = (dataSet) => {
    return dataSet[Math.floor(Math.random(dataSet) * dataSet.length)];
}

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    }
    else {
        return str;
    }
}

const upperSet = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerSet = "qwertyuiopasdfghjklzxcvbnm";
const numSet = "0123456789";
const symbolSet = "!@#$%^&*()~_-?/+=|";

const generateRandomPass = (password = "") => {
    if (upperInput.checked) {
        password += getRandom(upperSet);
    }
    if (lowerInput.checked) {
        password += getRandom(lowerSet);
    }
    if (numberInput.checked) {
        password += getRandom(numSet);
    }
    if (symbolInput.checked) {
        password += getRandom(symbolSet);
    }
    if (password.length < totalChar.value) {
        return generateRandomPass(password);
    }
    passBox.innerText = truncateString(password, totalChar.value);
}
generateRandomPass();



function copyToClipboard() {
        const passwordField = document.getElementById("pass-box");
        const passwordText = passwordField.innerText;

        const textarea = document.createElement("textarea");
        textarea.value = passwordText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        
        alert("Password copied to clipboard!");
    }
