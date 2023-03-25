const router = require("express").Router();

const mongoose = require("mongoose");

const Phone = require("..//models/Phone.model.js");

// GET /api/phones -  Retrieves all of the phones

router.get("/phones", (req, res, next) => {
  Phone.find()

    .then((allPhones) => res.json(allPhones))

    .catch((err) => res.json(err));
});

module.exports = router;
