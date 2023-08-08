const express = require("express");
const URL = require("../models/url");

const router = express.Router();

router.get("/",(req,res)=>{
    return res.render("home");
})

module.exports = router;