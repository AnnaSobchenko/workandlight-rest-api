const mongoose = require("mongoose");

const pricesSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  street: {
    type: String,
  },
  area: {
    type: String,
  },
  description: {
    type: String,
  },
  tables: {
    type: String,
  },
  contact: {
    type: String,
  },
  site: {
    type: String,
  },
  location: {
    lat: {
      type: String,
    },
    lng: {
      type: String,
    },
  },
  option: {
    wifi: { type: String },
    charge: { type: String },
  },  
  type: {
    type: String,
    default: null,
  },
  worktime: {
    type: String,
  },
});

const Places = mongoose.model("places", pricesSchema);

module.exports = {
  Places,
};
