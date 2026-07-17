const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: require("path").resolve(__dirname, ".env") });

const app = express();
app.use(cors());
app.use(express.json());


const authRoutes = require("./routes/auth");
const abstractRoutes = require("./routes/abstract");
const templateRoutes = require("./routes/template");

app.use("/api/auth", authRoutes);
app.use("/api/abstract", abstractRoutes);
app.use("/api/template", templateRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB qoşuldu"))
  .catch(err => console.log(err));

if (require.main === module) {
  app.listen(5000, () => console.log("Server 5000 portunda işləyir"));
}

module.exports = app;
