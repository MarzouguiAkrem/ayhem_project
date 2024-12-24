const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const eventCard = mongoose.model("eventCard", EventSchema);

module.exports = { eventCard };
