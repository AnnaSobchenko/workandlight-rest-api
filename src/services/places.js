const { Places } = require("../db/placesModel");

const getAllPlaces = async () => {
  const result = await Places.find(
    {},
    {
      name: 1,
      _id: 1,
      street: 1,
      city: 1,
      description: 1,
      area: 1,
      tables: 1,
      contact: 1,
      site: 1,
      location: 1,
      type: 1,
      worktime: 1,
      option: 1,
    }
  );
  return result;
};
const addPlace = async (body) => {
  await Places.create(body);
  return result;
};
module.exports = {
  getAllPlaces,
  addPlace,
};
