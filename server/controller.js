const { spawn } = require('child_process');
const path = require('path');

async function takeURL(req, res) {
  try {
    const { url, number } = req.body;

    if (!url || !number) {
      return res.status(400).json({ error: 'Both url and number are required' });
    }

    // Log the received URL and number
    console.log(`Received URL: ${url}`);
    console.log(`Received Number: ${number}`);

    // Get the path to the Python script in the current directory
    const pythonScriptPath = path.join(__dirname, 'process_input.py');

    // Spawn a Python process to run the script with url and number
    const pythonProcess = spawn('python', [pythonScriptPath, url, number]);

    let pythonOutput = '';
    pythonProcess.stdout.on('data', (data) => {
      pythonOutput += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      console.error(`Python error: ${data}`);
    });

    pythonProcess.on('close', (code) => {
      if (code === 0) {
        console.log('Python script executed successfully');
        
        // Parse the JSON result from the Python script output
        let result = {};
        try {
          result = JSON.parse(pythonOutput);
        } catch (error) {
          return res.status(500).json({ error: 'Failed to parse Python output' });
        }

        // Return the result back to the client
        res.status(200).json({ message: 'Data processed successfully', data: result });
      } else {
        res.status(500).json({ error: 'Python script failed' });
      }
    });
    
  } catch (error) {
    console.error('Error processing data:', error);
    res.status(500).json({ error: 'An error occurred while processing the data' });
  }
}

module.exports = { takeURL };
