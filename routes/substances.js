const express = require('express');
const router = express.Router();

const substancesFactory = require('../factorys/substances');

/* GET substances */
router.get('/', function(req, res, next) {
	substancesFactory.getSubstances().then(result => {
		res.json(result);
	}).catch(err => {
		if (req.xhr) {
			res.status(500).send({ error: 'Something failed!' });
		} else {
			next(err);
		}
	});
});

module.exports = router;
