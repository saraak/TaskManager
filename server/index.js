const express = require('express');
const port = 8000

const app = express()

app.use('/', (req, res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
