// used to divide routes

const express = require("express");
// calls router
const router = express.Router();

// exports the router to the main app
module.exports = router;

router.get("/", (req, res) => {
    res.render("about");
});
