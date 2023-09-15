const express = require('express');
const router = express.Router();

const keyController = require("../controllers/keyController")

router.post("/keys/addKey", keyController.addKey);
router.post("/keys/apiCalled", keyController.apiCalled);

module.exports = router;
