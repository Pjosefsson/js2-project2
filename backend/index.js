const express = require('express');
const cors = require('cors'); // sätta upp webbservern 
const port = 5004;

const app = express(); //bestämma vilken port vi vill targeta 
app.use(cors({ origin: '*' }));
app.use(express.static('public'));
app.listen(port, () => { console.log('server is listening on port' + port); });