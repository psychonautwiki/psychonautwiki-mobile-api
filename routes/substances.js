const express = require('express');
const router = express.Router();

/* GET substances */
router.get('/', function(req, res, next) {
  res.json({
    substances: [{name: 'DMT'}]
  });
});

module.exports = router;
