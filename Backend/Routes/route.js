const express = require('express')
const router =express.Router();
const {getRealMeaning,createRealMeaning} = require("../Controller/realdictionary")
const {authenticateAdmin} = require('../Controller/authenticateAdmin');
const {getAdminStats} = require('../Controller/getAdminStats');
const { getFacts } = require('../Controller/83Facts');
const {getResearchPapers,getResearch} = require('../Controller/researchPapers');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.route('/dictionary/:word').get(getRealMeaning).post(createRealMeaning);
router.route("/facts").get(getFacts);
router.route('/admin/login').post(authenticateAdmin);  
router.route('/admin/stats').get(getAdminStats);
router.route('/researchpapers').get(getResearchPapers);
router.route('/researchpaper/:id').get(getResearch)
module.exports = router;