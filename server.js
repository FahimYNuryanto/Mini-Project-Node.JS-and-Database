const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

var corsOptions = {
    origin: "http://localhost:4000"
}
app.use(cors(corsOptions));

const db = require('./models');
db.sequelize.sync();

require("./routes/route.js")(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Running a server on ${PORT}.`);
});