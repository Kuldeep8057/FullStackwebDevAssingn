function reverseString (input){
    return input.split('').reverse().join('')
}

const originalString = "Hello World";

const reversedString = reverseString(originalString);
console.log(reversedString)