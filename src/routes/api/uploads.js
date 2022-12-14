const express = require("express");
const authorize = require("../../middlewares/authorize");
const { catchErrors } = require("../../middlewares/catch-errors");
const router = express.Router();
const multer = require("multer");
const mime = require("mime-types");
const uuid = require("uuid");

// const UPLOAD_DIR = path.join(__dirname, process.env.UPLOAD_DIR);

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, UPLOAD_DIR);
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname + "-" + Date.now());
//   },
// });
// const upload = multer({
//   storage: storage,
//   limits: { fieldSize: 2000000 },
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype.includes("image")) {
//       cb(null, true);
//       return;
//     }
//     cb(null, false);
//   },
// });

const upload = multer({
  storage: multer.diskStorage({
    filename: (req, file, cb) => {
      const extname = mime.extension(file.mimetype);
      const filename = uuid.v4() + "." + extname;
      cb(null, filename);
    },
    destination: "./tmp",
  }),
});

router.post(
  "/",
  authorize,
  upload.single("avatar"),
  catchErrors(async (req, res, next) => {
    const user = await avatarsUpdate(req.user.token, req.file);
    res.status(200).send(user);
  })
);

router.patch(
  "/change",
  authorize,
  upload.single("avatar"),
  catchErrors(async (req, res, next) => {
    const user = await avatarsUpdate(req.user.token, req.file);
    res.status(200).send(user);
  })
);

router.post("/", authorize, catchRegErrors(signupUserControl));
