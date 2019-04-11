const Router = require("express").Router;
const User = require("../../../models/user");
const router = Router({ mergeParams: true });

router.get("/", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

router.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

module.exports = router;
