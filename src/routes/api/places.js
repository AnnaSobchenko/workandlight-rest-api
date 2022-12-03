const express = require("express");
const {
  getPlacesController,
  addPlacesController,
} = require("../../controllers/places");
const { catchErrors } = require("../../middlewares/catch-errors");

const router = express.Router();

router.get("/", catchErrors(getPlacesController));
router.post("/add", catchErrors(addPlacesController));

module.exports = router;
