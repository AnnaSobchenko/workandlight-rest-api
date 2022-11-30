const { Places } = require("../db/placesModel");

const getAllPlaces = async () => {
  const result = await Places.find(
    {},
    {
      name: 1,
      _id: 1,
      online: 1,
      street: 1,
      description: 1,
      area: 1,
      tables: 1,
      contact: 1,
      site: 1,
      location: 1,
      type: 1,
      worktime: 1,
    }
  );
  return result;
};
module.exports = {
  getAllPlaces,
};
