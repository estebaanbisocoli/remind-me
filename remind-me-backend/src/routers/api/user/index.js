const Router = require("express").Router;
const User = require("../../../models/user");
const router = Router();
const passport = require("../../../auth");

router.post("/", (request, response) => {
  // Creates and saves a new user with a salt and hashed password
  User.register(
    new User({ username: request.body.username }),
    request.body.password,
    function(err, user) {
      if (err) {
        console.log(err);
        return response.json("error");
      } else {
        passport.authenticate("local")(request, response, function() {
          response.json({ loggedIn: true });
        });
      }
    }
  );
});
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/api/user",
    failureRedirect: "/login"
  })
);

module.exports = router;
