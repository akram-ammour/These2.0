const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3005;

// Define a route to fetch and send the PDF
app.get('/pdf', async (req, res) => {
  try {
    // Fetch the PDF from the URL
    const pdfUrl = 'http://wd.fmpm.uca.ma/biblio/theses/annee-htm/FT/2007/these44-07.pdf';
    const response = await axios.get(pdfUrl, {
      responseType: 'arraybuffer' // Set response type to arraybuffer to handle binary data
    });

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="these44-07.pdf"');

    // Send the PDF data to the client
    return new Response(response, { headers: { 'content-type': 'application/pdf' } });
  } catch (error) {
    // Handle errors
    console.error('Error fetching PDF:', error.message);
    res.status(500).send('Error fetching PDF');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
