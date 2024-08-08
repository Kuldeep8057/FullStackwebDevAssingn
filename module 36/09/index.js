const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Create an event handler
const eventHandler = () => {
    console.log('Event handler called!');
};


eventEmitter.on('testEvent', eventHandler);

// Call the event "testEvent"
eventEmitter.emit('testEvent'); 

// Remove the event handler for "testEvent"
eventEmitter.removeListener('testEvent', eventHandler);


eventEmitter.emit('testEvent'); 
