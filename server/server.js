const express = require("express");
const { User } = require("./Database/models/user");
const { eventCard } = require("./Database/models/event");

require("./Database/connect");
const cors = require("cors");

const app = express();

// Configuration de CORS
app.use(
  cors({
    origin: "*", // Frontend autorisé
    methods: ["GET", "POST", "PUT", "DELETE"], // Méthodes HTTP autorisées
    credentials: true, // Si vous utilisez des cookies
  })
);

app.use(express.json());

app.post("/addEvent", async (req, res) => {
  console.log(req.body);

  const { eventName, price } = req.body;

  const event = new eventCard({ eventName, price });

  await event.save();
  res.json({ message: "EVENT created !" });
});

app.post("/auth/login", async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    console.log("User not found");
    res.json({
      success: false,
      message: "Invalid credentials",
    });
  } else {
    if (user.password == password) {
      console.log("LOGIN SUCCESSFUL");
      res.json({
        success: true,
        // token
        // user
      });
    } else {
      console.log("password incorrect");
      res.json({
        success: false,
        message: "Invalid credentials",
      });
    }
  }
});

app.post("/auth/register", async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, password } = req.body;

  const isExists = await User.exists({ email });
  if (isExists) {
    res.json({ success: false, message: "Email is already in use" });
  } else {
    const user = new User({
      firstName,
      lastName,
      email,
      password,
    });

    await user.save();

    res.json({ success: true });
  }
});

app.listen(3000, () => {
  console.log("SERVER IS RUNNING");
});
