const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const purchaseRecords = require("./routes/api/purchase_records");
const bodyParser = require("body-parser");
const passport = require('passport');


mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB successfully!"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/purchase_records", purchaseRecords);
app.use(passport.initialize());
require('./config/passport')(passport);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on ${port}`));