const express = require('express');
const path = require('path');
const app = express();

// 1. Tell the server to look in the main folder for files
app.use(express.static(path.join(__dirname, './')));

// 2. Tell the server to show sip.html when the site opens
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'sip.html'));
});

// 3. Use the port Render gives you
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
