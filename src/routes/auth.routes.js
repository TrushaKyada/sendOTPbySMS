const router = require('express').Router();
const {registration} = require('../controller/auth.controller');
router.post('/',registration);
module.exports = router;