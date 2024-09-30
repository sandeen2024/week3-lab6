const fs = require('fs');
const os = require('os');

// Write some text to sample.txt
fs.writeFile('sample.txt', 'This is some text', (err) => {
    if (err) throw err; // Handle the error
    console.log('File created and text written to sample.txt.');

    // Read the contents of sample.txt
    fs.readFile('sample.txt', 'utf8', (err, data) => {
        if (err) throw err; // Handle the error
        console.log('File contents:', data);

        // Write data to output.txt
        fs.writeFile('output.txt', 'This is output text', (err) => {
            if (err) throw err; // Handle the error
            console.log('Data written to output.txt.');

            // Gather OS information
            const osInfo = Hostname: ${os.hostname()}
            \nPlatform: ${os.platform()}\nCPU Cores: ${JSON.stringify(os.cpus())};
            console.log('OS Information:', osInfo);

            // Log OS information to os-info.txt
            fs.writeFile('os-info.txt', osInfo, (err) => {
                if (err) throw err; // Handle the error
                console.log('OS information logged in os-info.txt.');
            });
        });
