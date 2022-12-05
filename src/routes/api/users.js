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
  catchLogErrors,
  catchErrors,
  catchRegErrors,
} = require("../../middlewares/catch-errors");

const router = express.Router();

router.post(
  "/signup",
  catchRegErrors(signupUserControl)
);
router.post(
  "/login",
  catchLogErrors(signinUserControl)
);
router.post("/logout", authorize, catchErrors(logoutUserControl));
router.get("/current", authorize, catchErrors(currentUserControl));
router.post("/refresh", authorize, catchErrors(refreshTokenControl));

module.exports = router;
