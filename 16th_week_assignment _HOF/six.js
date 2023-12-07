const linkedinProfileRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;

function isValidLinkedInProfileURL(url) {
    return linkedinProfileRegex.test(url);
}

let url = 'https://www.linkedin.com/in/kuldeep8057/'
let url1 = 'http://www.linkedin.com/in/kuldeep8057/'

console.log(url + " is " + (isValidLinkedInProfileURL(url) ? "valid" : "invalid") + " URL");
console.log(url1 + " is " + (isValidLinkedInProfileURL(url1) ? "valid" : "invalid") + " URL");