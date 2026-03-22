const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

//Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

//Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
}); 


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

;
