// synchronous.js

const fs = require('fs');
const os = require('os');

// Create a sample.txt file and add some text to it
fs.writeFileSync('sample.txt', 'This is a sample text file for synchronous operations.');

// Synchronously read the contents of sample.txt using fs.readFileSync()
try {
    const data = fs.readFileSync('sample.txt', 'utf8');
    console.log('File contents (Sync Read):', data);
} catch (err) {
    console.error('Error reading sample.txt:', err);
}

// Synchronously write data to a new file using fs.writeFileSync()
const info = `Hostname: ${os.hostname()}\nPlatform: ${os.platform()}`;

// Write the information to a file
try {
  fs.writeFileSync('system_info.txt', info);
  console.log('System information has been written to system_info.txt');
} catch (err) {
  console.error('Error writing system information:', err);
}