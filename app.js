// calling express and setting it to app
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!!");
});

app.listen(3000, () => console.log("App is running"));
