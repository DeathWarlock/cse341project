/*routes.get('/', myController.awesomeFunction);
routes.get('/awesome', myController.returnAnotherPerson);*/

const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'))

module.exports = router;