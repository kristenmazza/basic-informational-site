const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.status(404).sendFile('404.html', { root: 'public' });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
