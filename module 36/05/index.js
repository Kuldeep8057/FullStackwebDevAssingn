const fs = require('fs');

// Read the content of nodejs_architecture.txt
fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Content of nodejs_architecture.txt:\n');
    console.log(data);
});
