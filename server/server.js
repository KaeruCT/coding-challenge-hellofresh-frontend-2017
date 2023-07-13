const express = require('express');
const path = require('path');
const serveStatic = express.static(path.join(__dirname, '../dist'));

const PORT = process.env.PORT || 3000;

const app = express();
app.get('/recipes.json', (req, res) => {
  res.send(require('../recipes.json'));
});

app.use(serveStatic);
app.use('*', serveStatic);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
