//controller.js
const { spawn } = require('child_process');
const path = require('path');

async function takeURL(req, res) {
  try {
    const { url, number } = req.body;       // retrieve the url and number from frontend
    
    if (!url || !number) {                  // if one of the fields is empty
      return res.status(400).json({ error: 'Both url and number are required' });
    }

    console.log(`Received URL: ${url}`);
    console.log(`Received Number: ${number}`);
    
    // run the python script by passing the url and the number
    const pythonScriptPath = path.join(__dirname, 'process_input.py');
    const pythonProcess = spawn('python', [pythonScriptPath, url, number]);

    let pythonOutput = '';
    
    pythonProcess.stdout.on('data', (data) => {
      pythonOutput += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      console.error(`Python error: ${data}`);
    });
    // return the python output in json format
    pythonProcess.on('close', (code) => {
      if (code === 0) {
        console.log('Python script executed successfully');
        try {
          const parsedOutput = JSON.parse(pythonOutput);

          if (parsedOutput.data && Array.isArray(parsedOutput.data)) {
            res.status(200).json({ message: 'Data processed successfully', data: parsedOutput.data });
          } else {
            res.status(500).json({ error: 'Invalid data format received from Python' });
          }
        } catch (error) {
          console.error('Error parsing Python output:', error);
          return res.status(500).json({ error: 'Failed to parse Python output' });
        }
      } else {
        res.status(500).json({ error: 'Python script failed with code ' + code });
      }
    });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
}

module.exports = { takeURL };
