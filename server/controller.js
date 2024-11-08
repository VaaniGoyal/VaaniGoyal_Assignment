// Controller function to handle URL input
async function takeURL(req, res) {
    try {
      const { url } = req.body; // Extract the URL from the request body
  
      if (!url) {
        return res.status(400).json({ error: 'URL is required' });
      }
  
      // Process the URL (you can add any additional logic here)
      console.log(`Received URL: ${url}`);
  
      // Respond with a success message
      res.status(200).json({ message: 'URL received successfully', url });
    } catch (error) {
      // Handle any potential errors
      console.error('Error processing URL:', error);
      res.status(500).json({ error: 'An error occurred while processing the URL' });
    }
  }
  
module.exports = { takeURL };  