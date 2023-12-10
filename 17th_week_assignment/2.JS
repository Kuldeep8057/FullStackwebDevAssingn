function manipulateString(inputString,callback){
    const changeString = inputString.toUpperCase()
            callback(changeString)
}
function logString(changeString){
    console.log(`the Manuplaed Sting: ${changeString}`);
}
manipulateString("Hello, World !",logString)


// function manipulateString(inputString) {
//     const modifiedString = inputString.toUpperCase();
//     function logString() {
//       console.log(modifiedString);
//     }
//     return logString;
//   }
//   const inputString = "Hello, World!";
//   const logFunction = manipulateString(inputString);
//   logFunction();
  