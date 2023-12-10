
function doubleArrayWithCallback(arr, callback) {
    return arr.map(callback);
}
const inputArray = [1, 2, 3, 4, 5];
const doubleCallback = function (num) {
    return num * 2;
};
const resultArray = doubleArrayWithCallback(inputArray, doubleCallback);
// Output the result
console.log(resultArray);



//OTHER WAY

// const doubleArrayWithCallback = (arr, callback = (num) => num * 2) => {
//     return arr.map(callback);
// };
// const inputArray = [1, 2, 3, 4, 5];
// const resultArray = doubleArrayWithCallback(inputArray);
// console.log(resultArray);
