const students = [
    {
        name: "Kuldeep",
        marks : 95,
    },
    {
        name: "Prabhat",
        marks : 75,
    },
    {
        name: "Renu",
        marks : 92,
    },
    {
        name: "Brijesh",
        marks : 70,
    },
    {
        name: "Amar",
        marks : 99,
    }
]
const checkResults = (name) => {
    for (let student of students){
        if(student.name === name){
        return student.marks >= 90
            ? console.log(`Congratulation ${student.name} ! you have cleared the exam.`)
            : console.log(`Sorry ${student.name} ! you have not cleared the exam.`)
        }    
    }
    console.log("Invalid User !!!")
}

// checkResults ("Kuldeep")
checkResults ("Brijesh")