const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PurchaseRecordSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  company_ticker: {
    type: String,
    require: true
  },
  shares: {
    type: Number,
    require: true
  },
  purchase_price: {
    type: Number,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = PurchaseRecord = mongoose
  .model("purchaseRecords", PurchaseRecordSchema);