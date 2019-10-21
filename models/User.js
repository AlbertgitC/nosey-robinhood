const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  session_token: { type: String, require: true },
  watch_list: { type: Array },
  purchase_record_ids: { type: Array },
  funds: { type: Number, default: 30000 },
  date: { type: Date, default: Date.now }
});

module.exports = User = mongoose.model("users", UserSchema);