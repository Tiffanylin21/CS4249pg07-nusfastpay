const express = require('express');
const bodyParser = require('body-parser');
const updateSheetRouter = require('./src/Screens/updateGoogleSheet/express.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json()); // Allows parsing JSON from the client
app.use('/updateGoogleSheet', updateSheetRouter); // This matches the POST URL in your React app

// Handle CORS if necessary
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
