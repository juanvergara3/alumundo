const express = require("express");
const router = express.Router();

//..............Import the controllers...................................
const emailController = require('../Controllers/contactSupport');


router.route("/sendEmail").post(emailController.soporte_create);


module.exports = router;