const Router = require("express").Router;
const UserRouter = require("./user");
const reminder = require("./reminders");

const router = Router();

router.use("/user", UserRouter);
router.use("/reminder", reminder);

module.exports = router;
