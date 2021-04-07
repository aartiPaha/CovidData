const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/timeseries', controller.timeseries)
router.get('/faq', controller.getFAQ)
router.get('/latest/news', controller.latestUpdate)
router.get('/state/district', controller.stateDistrict)

module.exports = router