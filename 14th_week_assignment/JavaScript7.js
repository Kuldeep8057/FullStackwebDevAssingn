function generateOTP(){
    let digits = '013456789'
    let OTP = '';
    for (let i=0; i<4; i++){
        OTP += digits[Math.floor(Math.random() * 10 )];
    }
    return OTP;
}

console.log(`Here is your otp: ${generateOTP()}`);