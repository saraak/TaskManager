const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

require('./config/mongoose.config');

require('./routes/project.route')(app);

app.listen(port, () => console.log(`${port} is being listened to`));




// const express = require('express');
// const port = 8000

// const app = express()

// app.use('/', (req, res) => {
//     res.send("hello world");
// });

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });
