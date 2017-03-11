const express = require('express');
const router = express.Router();

const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

const client = new Lokka({
  transport: new Transport('https://api.psychonautwiki.org/')
});

/* GET substances */
router.get('/', function(req, res, next) {
  client.query(`
		substances(limit:300) {
        name
        url
        featured
        addictionPotential
        crossTolerance
        dangerousInteraction {
            name
        }
        class {
            chemical
            psychoactive
        }
        tolerance {
            full
            half
            zero
        }
        effects {
            name
            url
        }
    }
	`).then(result => {
	    res.json(result);
	});
});

module.exports = router;
