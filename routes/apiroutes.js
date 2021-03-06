const express = require('express');
const path = require('path');
const cors = require('cors');
const router = express.Router()

const api_controller = require(path.join("..", "controllers", "apiController"));

router.get('/locations', cors(), api_controller.locations)
router.get('/search', cors(), api_controller.search)

module.exports = router;
