const router = require("express").Router();

router.post("/", async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(401).send();
  }
  user.reminders.push(req.body);
  await user.save();
  res.json(user.reminders[user.reminders.length - 1]);
});

router.get("/", async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(401).send();
  }
  res.json(req.user.reminders);
});

module.exports = router;
