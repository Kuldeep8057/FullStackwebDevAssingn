const allUsers = [
    "Anurag",
    "Mithunda",
    "Alka",
    "Praveen",
    "Vinay",
    "Shubham",
    "Shivanm",
    "Fara",
];

function isUserPresent(user){
    if(allUsers.includes(user)){
    console.log(`Yes, ${user} is valid user`)
    } else {
        console.log(`No, ${user} is not a valid user`)
    }
}

//isUserPresent("Mithunda")
isUserPresent("AnyOne")
