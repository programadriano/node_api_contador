
const express = require('express');
const os = require('os');
const router = express.Router();
var countViews = 1;

router.get('/', function (req, res, next) {
    res.status(200).send({
        valorAtual: countViews++,
        machineName: os.hostname(),
        sistema: os.type(),
        Plataforma: "Node.js",
    });
});

module.exports = router;
