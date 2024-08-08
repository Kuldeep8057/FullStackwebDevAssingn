const fs = require('fs');
const os = require('os');

// Step 5: Delete the nodejs_architecture.txt file
fs.unlink('nodejs_architecture.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File Deleted Successfully');

    // Step 6: Get and print the OS name and release version
    const osName = os.type(); // e.g., 'Linux', 'Darwin', 'Windows_NT'
    const osRelease = os.release(); // e.g., '5.4.0-66-generic'

    console.log(`OS Name: ${osName}`);
    console.log(`OS Release Version: ${osRelease}`);
});
