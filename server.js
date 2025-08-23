const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const db = require("./db");
const passport = require("./middleware/auth");
const cors = require("cors");

// Packages
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 8080;
app.use(passport.initialize());
const authMiddleware = passport.authenticate("local", { session: false });

// Routes
const userRoutes = require("./routes/UserRoutes");
const carRoutes = require("./routes/CarRoutes");

// Routes
app.use("/user", userRoutes);
app.use("/car", carRoutes);

app.listen(PORT, () => {
  console.log(`Listening the port ${PORT}`);
});
