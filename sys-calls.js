// sys-calls.js

const fs = require('fs');
const os = require('os');

// Create a sample.txt file and add some text to it
fs.writeFile('sample.txt', 'This is a sample text file.', (err) => {
    if (err) {
        console.error('Error writing to sample.txt:', err);
        return;
    }
    console.log('sample.txt created successfully.');

    // Read the contents of sample.txt using fs.readFile()
    fs.readFile('sample.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading sample.txt:', err);
            return;
        }
        console.log('File contents:', data);

        // Write OS information to output.txt
        const hostname = os.hostname();
        const platform = os.platform();
        const cpus = os.cpus();
        
        console.log('Hostname:', hostname);
        console.log('Platform:', platform);
        console.log('CPU Cores:', cpus.length);


        const fileInfo = `
        Hostname: ${hostname}
        Platform: ${platform}
        CPU Cores: ${cpus.length}
        `;

        fs.writeFile('os_info.txt', fileInfo, (err) => {
          if (err) {
            console.error('Error writing file:', err);
            return;
          }
          console.log('Information written to os_info.txt file.');
        });
     });
});