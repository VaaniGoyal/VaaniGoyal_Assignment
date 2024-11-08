const { spawn } = require('child_process');
const path = require('path');

// Function to handle the URL and number processing
async function takeURL(req, res) {
  try {
    const { url, number } = req.body;

    // Validate the incoming data
    if (!url || !number) {
      return res.status(400).json({ error: 'Both url and number are required' });
    }

    console.log(`Received URL: ${url}`);
    console.log(`Received Number: ${number}`);

    // Get the path to the Python script in the current directory
    const pythonScriptPath = path.join(__dirname, 'process_input.py');

    // Spawn a Python process to run the script with url and number
    const pythonProcess = spawn('python', [pythonScriptPath, url, number]);

    let pythonOutput = '';
    
    // Handle data coming from the Python process
    pythonProcess.stdout.on('data', (data) => {
      pythonOutput += data.toString();  // Accumulate data
    });

    // Handle errors from the Python process
    pythonProcess.stderr.on('data', (data) => {
      console.error(`Python error: ${data}`);  // Log error to console
    });

    // After the Python process finishes execution
    pythonProcess.on('close', (code) => {
      if (code === 0) {
        console.log('Python script executed successfully');
        
        // Attempt to parse the Python output as JSON
        try {
          const result = JSON.parse(pythonOutput);  // Parse output into JSON

          // Return the result back to the client
          res.status(200).json({ message: 'Data processed successfully', data: result });
        } catch (error) {
          console.error('Error parsing Python output:', error);  // Log error if parsing fails
          return res.status(500).json({ error: 'Failed to parse Python output' });
        }
      } else {
        // Handle cases where the Python script fails
        res.status(500).json({ error: 'Python script failed with code ' + code });
      }
    });
  } catch (error) {
    // Catch any errors that occur during execution
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
}

module.exports = { takeURL };
