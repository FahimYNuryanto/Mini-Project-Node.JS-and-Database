const express = require('express');
const app = express();
const cors = require('cors');

var corsOptions = {
    origin: "https://127.0.0.1:3306"
}
app.use(cors(corsOptions));

const db = require('./models');
db.sequelize.sync( { force: true } );

require("./routes/route.js")(app);

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
    console.log(`Running a server on ${PORT}.`);
});