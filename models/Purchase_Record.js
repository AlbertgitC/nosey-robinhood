const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PurchaseRecordSchema = new Schema({
  company_id: {
    type: Number,
    require: true
  },
  shares: {
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