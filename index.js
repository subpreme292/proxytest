const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/JPlez', (req, res) => {
  try {
    // Custom logic for the /JPlez endpoint
    const responseData = { message: 'Custom response from JPlez endpoint!' };

    // Log success or important information
    console.log('JPlez endpoint accessed successfully');

    // Send response
    res.json(responseData);
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
