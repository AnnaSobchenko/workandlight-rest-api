const express = require("express");
const authorize = require("../../middlewares/authorize");
const {
  signupUserControl,
  signinUserControl,
  logoutUserControl,
  currentUserControl,
  refreshTokenControl,
} = require("../../controllers/users");
const {
  // catchLogErrors,
  // catchSignupErrors,
  catchErrors,
} = require("../../middlewares/catch-errors");

const router = express.Router();

router.post(
  "/signup",
  catchErrors(signupUserControl)
);
router.post(
  "/login",
  catchErrors(signinUserControl)
);
router.post("/logout", authorize, catchErrors(logoutUserControl));
router.get("/current", authorize, catchErrors(currentUserControl));
router.post("/refresh", authorize, catchErrors(refreshTokenControl));

module.exports = router;
