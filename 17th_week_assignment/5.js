function greetPerson(name){
    return new Promise((reslove)=> {
        const greeitng = `Hello ${name}`
        reslove(greeitng)
    })
}

greetPerson("Mithun")
.then((message => console.log(message)))