const express = require("express");
const { getPlacesController } = require("../../controllers/places");
const { catchErrors } = require("../../middlewares/catch-errors");

const router = express.Router();

router.get("/", catchErrors(getPlacesController));

module.exports = router;
