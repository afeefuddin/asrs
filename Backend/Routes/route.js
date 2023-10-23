const express = require('express')
const router =express.Router();
const {getRealMeaning} = require("../Controller/realdictionary")

router.route('/:word').get(getRealMeaning);
  
module.exports = router;