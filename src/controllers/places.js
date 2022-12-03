const { getAllPlaces, addPlace } = require("../services/places");

const getPlacesController = async (req, res, next) => {
  const places = await getAllPlaces();
  res.status(200).send(places);
};
const addPlacesController = async (req, res, next) => {
  const places = await addPlace(req.body);
  res.status(200).send(places);
};
module.exports = { getPlacesController, addPlacesController };
