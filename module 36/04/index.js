const fs = require('fs');

// Data to append
const additionalData = `
Advantages of Node.js:
1. Fast and Scalable: Node.js is built on the V8 JavaScript engine, making it very fast in code execution. Its event-driven, non-blocking architecture makes it highly scalable.
2. Single Programming Language: Node.js allows developers to write both client-side and server-side code in JavaScript, which can reduce context switching and improve productivity.
3. Large Ecosystem: The npm package manager provides access to a large repository of reusable code, which can significantly speed up development.
4. Active Community: Node.js has a large and active community that contributes to the continuous improvement and support of the platform.
5. Easy to Learn: For developers already familiar with JavaScript, picking up Node.js is relatively straightforward.
`;

// Append additional data to nodejs_architecture.txt
fs.appendFile('nodejs_architecture.txt', additionalData, (err) => {
    if (err) throw err;
    console.log('Advantages of Node.js have been appended to nodejs_architecture.txt');

    // Read the updated file content and print it to the console
    fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('\nUpdated content of nodejs_architecture.txt:\n');
        console.log(data);
    });
});
