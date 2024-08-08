const http = require('http');
const EventEmitter = require('events');

// Step 7: Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});


const eventEmitter = new EventEmitter();
eventEmitter.on('subscribe', () => {
    console.log('User has subscribed!');
});


eventEmitter.emit('subscribe');
