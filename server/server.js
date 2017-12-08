const path = require('path');
const express = require('express');
var app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

console.log(__dirname + '/../public');
console.log(publicPath);

app.get('/', (req, res) => {
    console.log('Jee');
    res.send('JEe');
});
app.listen(port, () => {
    console.log(`Started on port ${port}`);
});