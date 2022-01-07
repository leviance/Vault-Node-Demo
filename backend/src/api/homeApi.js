const router = require("express").Router();
const {homeControllers} = require("../controllers/index");
const {appRoleValidation} = require("../validations/index");


router.post("/enable-approle", appRoleValidation.enableAppRole, homeControllers.enableAppRole);
router.get("/auth-methods", homeControllers.getAuthMethods);
router.delete("/auth-method/:path", homeControllers.deleteAuthMethod);
router.get("/test", homeControllers.testCreateSecret);

router.get("/logout", homeControllers.logout);


module.exports = router;