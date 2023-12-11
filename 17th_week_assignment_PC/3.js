const person = {
    firstName: "Mithun",
    lastName: "S",
    age:20
}

function modifyFun(personObject,callback){
    let fullName= `${personObject.firstName} ${personObject.lastName}`
    let ageInDays= personObject.age * 365;
callback(fullName,ageInDays)
}

function logResult(fullName,ageInDays){
    console.log(`The person's full Name is ${fullName} and their age in days is ${ageInDays}`);
}

modifyFun(person,logResult)