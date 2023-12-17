class Temperature {
    constructor(celsius=0,fahrenheit = 32) {
        this._celsius = celsius;
        this._fahrenheit = fahrenheit;
    }

    get celsius() {
        return this._celsius;
    }

    set celsius(value) {
        if (this.isValidTemperature(value)) {
            this._celsius = value;
            this._fahrenheit = this.celsiusTofahrenheit(value);
        } else {
            console.log('Invalid temperature input. Please provide a numeric value.');
        }
    }

    get fahrenheit() {
        return this._fahrenheit;
    }

    set fahrenheit(value) {
        if (this.isValidTemperature(value)) {
            this._fahrenheit = value;
            this._celsius = this.fahrenheitTocelsius(value);
        } else {
            console.log('Invalid temperature input. Please provide a numeric value.');
        }
    }

    isValidTemperature(value) {
        return typeof value === 'number' && !isNaN(value);
    }

    celsiusTofahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    fahrenheitTocelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
}

const temperature = new Temperature();

console.log(`Initial celsius: ${temperature.celsius}°c`);

console.log(`Initial fahrenheit: ${temperature.fahrenheit}°F`);

temperature.celsius = 25;

console.log(`celsius: ${temperature.celsius}°c`);

console.log(`fahrenheit: ${temperature.fahrenheit}°F`);

temperature.fahrenheit = 68;

console.log(`celsius: ${temperature.celsius}°c`);

console.log(`fahrenheit: ${temperature.fahrenheit}°F`); 


