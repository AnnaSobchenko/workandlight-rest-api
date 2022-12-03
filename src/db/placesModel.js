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
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
  option: {
    wifi: { type: Boolean },
    charge: { type:Boolean},
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
