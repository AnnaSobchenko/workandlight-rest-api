const { getAllPlaces } = require("../services/places");

const getPlacesController = async (req, res, next) => {
  const prices = await getAllPlaces();
  res.status(200).send(prices);
};
module.exports = { getPlacesController };
