const EventEmitter = require('events');


const eventEmitter = new EventEmitter();

const eventHandler = () => {
    console.log('Event handler called!');
};

eventEmitter.on('testEvent', eventHandler);
eventEmitter.emit('testEvent'); 

eventEmitter.removeListener('testEvent', eventHandler);
eventEmitter.emit('testEvent'); 


const currentMaxListeners = eventEmitter.getMaxListeners();
console.log(`Current maximum number of listeners: ${currentMaxListeners}`);

eventEmitter.setMaxListeners(51);

const newMaxListeners = eventEmitter.getMaxListeners();
console.log(`New maximum number of listeners: ${newMaxListeners}`);
