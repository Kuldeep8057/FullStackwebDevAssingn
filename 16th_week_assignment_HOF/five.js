const urlPattern = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[.][a-zA-Z]+$/;

function isValidURL(input) {
    return urlPattern.test(input);
}

const url = "https://pwskills.com"
const url1 = "ftp://invalid.url";


console.log(url + " is " + (isValidURL(url) ? "valid" : "invalid") + " URL");
console.log(url1 + " is " + (isValidURL(url1) ? "valid" : "invalid") + " URL");




