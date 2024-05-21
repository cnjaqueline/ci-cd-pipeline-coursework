// app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
} else {
    module.exports = app;
}
