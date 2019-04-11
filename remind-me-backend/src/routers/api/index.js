const Router = require("express").Router;
const UserRouter = require("./user");
const router = Router();

router.use("/user", UserRouter);

module.exports = router;
