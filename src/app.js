const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send(`
    <form action="/sum" method="post">
        <label for="num1">Number 1:</label>
        <input type="number" id="num1" name="num1" required>
        <label for="num2">Number 2:</label>
        <input type="number" id="num2" name="num2" required>
        <button type="submit">Sum</button>
    </form>
  `);
});

app.post('/sum', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid numbers');
    } else {
        const sum = num1 + num2;
        res.send(`The sum is ${sum}`);
    }
});

if (require.main === module) {
    // This file is run directly, start the server
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
} else {
    // This file is required as a module, export the app
    module.exports = app;
}