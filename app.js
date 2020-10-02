// calling express and setting it to app
const express = require("express");
const app = express();

// view engine, renders views
app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => {
    res.render("index");
});

// app listener
app.listen(3000, () => console.log("App is running"));
