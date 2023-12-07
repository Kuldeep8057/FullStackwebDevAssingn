// let input = "Hello, World!";
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// function delayedReverse(str) {
//     setTimeout(function () {
//         let reversedString = reverseString(str);
//         console.log(reversedString);
//     }, 2000);
// }
// delayedReverse(input);


// second method


let input = "Hello, World!";
function reverseString(str) {
    return str.split("").reverse().join("");
}
function delayedReverse() {
    let reversedString = reverseString(input);
    console.log(reversedString);
}

setTimeout(delayedReverse,2000);

