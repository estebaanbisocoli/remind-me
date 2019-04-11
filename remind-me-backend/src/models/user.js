const mongoose = require("mongoose");
const ReminderSchema = require("./reminder-schema");
const userSchema = new mongoose.Schema({
  email: { unique: true, type: String },
  password: String,
  reminders: [ReminderSchema]
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
