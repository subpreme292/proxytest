const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/JPlez', async (req, res) => {
  try {
    // Your existing code

    // Log success or important information
    console.log('Proxy request successful');

    // Send response
    res.json({ message: 'Success' });
  } catch (error) {
    // Log the error
    console.error('Error:', error);

    // Send an error response
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
