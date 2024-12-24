const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://eventsUser:B2e6o9RuVJ4jgYMB@formulaire.lx96yq3.mongodb.net/eventsdb"
  )
  .then(() => {
    console.log("DATABASE Connected");
  })
  .catch((err) => {
    console.log("Failed to connect", err);
  });
