const express = require('express');
const app = express();
const port = 3000;
const lottery = require('./controllers/lottery');

app.route('/')
    .get((req, res) => res.send('Hello World!'))
app.route('/rounds')
    .get((req, res) => lottery.get_lottery_rounds(req, res))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
