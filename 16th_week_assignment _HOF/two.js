/*let delayInSeconds = 3;
function countdown(second){
    console.log(second + " seconds remaining...");
}
function generateRandomNumber (){
    console.log("Generating random number...");
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Random Number Generated:" + randomNumber);
}
let countdownInterval = setInterval(function (){
    countdown(delayInSeconds);
    delayInSeconds--;
    if(delayInSeconds === 0){
        clearInterval(countdownInterval)
        generateRandomNumber();
    }
},1000)*/
                                    //second
function generateRandomNumber(){
    return Math.floor(Math.random() * 100) ;
}
function generateRandomNumberWithDelay(delayInSeconds){
    console.log(`Generate Random after delay in ${delayInSeconds}`);
    let countdown = 3;
    const countdownInterval = setInterval(()=>{
        console.log(`${countdown} seconds remaining...`);
        countdown--;
        if(countdown === 0){
            clearInterval(countdownInterval);
            const randomNumber = generateRandomNumber()
            console.log(`Random Number is ${randomNumber}`);
        }
    },1000);
}

generateRandomNumberWithDelay(3);
