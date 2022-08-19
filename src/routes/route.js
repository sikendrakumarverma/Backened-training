const express = require('express');
const router = express.Router();

const Controller= require("../controllers/Controller")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", Controller.createAuthor  )

router.post("/createBook", Controller.createBook  )

router.get("/getAuthorname", Controller.getAuthorname  )

router.get("/getUpdatedbook", Controller.getUpdatedbook  )

router.get("/getPriceBook", Controller.getPriceBook  )

module.exports = router;