const express = require("express");

const app = express();
PORT = 3000;

app.get("/", (req, res) => {
    res.status(200)
    res.send("hello world");
})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})

