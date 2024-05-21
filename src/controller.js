// controller.js
const { response } = require('express');

function sum(req, res) {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid numbers');
    } else {
        const sum = num1 + num2;
        res.send(`The sum is ${sum}`);
    }
}

module.exports = {
    sum
};
