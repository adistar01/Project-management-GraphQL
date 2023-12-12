const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const client = mongoose.model("Client", clientSchema);

module.exports = client;
