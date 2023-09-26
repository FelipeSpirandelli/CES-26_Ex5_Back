const express = require('express');
var router = express.Router();

const cidades = require('../public/cidades.json');

router.get('/getAll', (req, res) => {
  res.json(cidades);
});

module.exports = router;
