const car = {
    make: "Audi",
    model: "Audi A6",
    launch: 2024
}

function carProperty(car) {
    for (const property in car) {
        console.log(`${property}: ${car[property]}`);
    
    }
}

carProperty(car)