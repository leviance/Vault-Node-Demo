const router = require("express").Router();
const {homeControllers} = require("../controllers/index");


router.get("/logout", homeControllers.logout);


module.exports = router;