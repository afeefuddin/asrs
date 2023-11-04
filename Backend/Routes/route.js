const express = require('express')
const router =express.Router();
const {getRealMeaning,createRealMeaning} = require("../Controller/realdictionary")
const {authenticateAdmin} = require('../Controller/authenticateAdmin');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.route('/:word').get(getRealMeaning).post(createRealMeaning);
router.route('/admin/login').post(authenticateAdmin);  
module.exports = router;