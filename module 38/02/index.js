const fs = require('fs');

const nodeJsArchitecture = `
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Key features of Node.js architecture:
1. Single-threaded Event Loop: Node.js operates on a single thread, using non-blocking I/O calls, allowing it to support tens of thousands of concurrent connections held in the event loop.
2. Asynchronous and Event-Driven: All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js-based server never waits for an API to return data.
3. Highly Scalable: Node.js uses a "single-threaded event loop" architecture capable of handling many concurrent connections with high throughput, making it highly scalable.
4. No Buffering: Node.js applications never buffer any data. These applications simply output the data in chunks.
5. Cross-Platform: Node.js can be run on various operating systems like Windows, Linux, Unix, Mac OS X, etc.
`;

fs.writeFile('nodejs_architecture.txt', nodeJsArchitecture, (err) => {
    if (err) throw err;
    console.log('Node.js architecture information has been written to nodejs_architecture.txt');
});
