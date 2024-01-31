const express = require('express');
const axios = require('axios');

const app = express();

const targetUrl = 'https://example.com'; // Replace with your target URL

app.all('/*', async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `${targetUrl}${req.url}`,
      headers: req.headers,
      data: req.method === 'GET' ? undefined : req.body,
    });

    // Forward the response from the target server
    res.status(response.status).send(response.data);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Deploy the serverless function on Vercel
module.exports = app;
