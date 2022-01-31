const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.route('/auth/github').get(controller.github_authenticate);
router.route('/login').get(controller.login);
router.route('/logout').get(controller.logout);

module.exports = router;
