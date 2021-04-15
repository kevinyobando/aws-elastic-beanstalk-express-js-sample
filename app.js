const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('Hello AWS World!'));
=======
app.get('/', (req, res) => res.send('Hello AWS!'));
>>>>>>> e83a34e6cec3cffc14804c01cca606de8cf98113

app.listen(port);
console.log(`App running on http://localhost:${port}`);
