const mongoose = require("mongoose");
const ReminderSchema = require("./reminder-schema");
const passportLocalMongoose = require("passport-local-mongoose");
const userSchema = new mongoose.Schema({
  username: { unique: true, type: String },
  reminders: [ReminderSchema]
});
userSchema.plugin(passportLocalMongoose);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
