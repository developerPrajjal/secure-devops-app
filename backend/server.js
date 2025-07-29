const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// ✅ This route is critical
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Backend!' });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
