

const express = require("express");
const bodyParser = require('body-parser');

const authorRoute = require('./routes/authors');


PORT = 3000;
const app = express();

app.use(express.static('public'));
              
app.use('/authors', authorRoute);


app.get("/", (req, res) => {
    res.status(200)
    res.send("get successful");
})

app.post("/", (req, res) => {
    res.status(200)
    res.send("post successful")
})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});

