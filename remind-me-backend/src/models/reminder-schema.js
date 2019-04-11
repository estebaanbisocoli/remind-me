const mongoose = require("mongoose");
const reminderSchema = new mongoose.Schema({
  title: String,
  message: String,
  beginDate: Date,
  endDate: Date,
  status: String
});
module.exports = reminderSchema;
