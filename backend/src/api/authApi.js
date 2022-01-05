const router = require("express").Router();
const {authController} = require("../controllers/index");


router.get('/check-login', authController.checkLogin);
router.get('/check-logout', authController.checkLogout);
router.post('/token', authController.tokenAuth);
    

module.exports = router;