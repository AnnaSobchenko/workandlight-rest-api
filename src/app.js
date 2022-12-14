const express = require("express");
// const fs=require("fs").promises
const logger = require("morgan");
const cors = require("cors");
const multer = require("multer");
// const path = require("path");
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

require("dotenv").config();

const placesRouter = require("./routes/api/places");
const usersRouter = require("./routes/api/users");
// const uploadRouter = require("./routes/api/uploads");

// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("../swagger.json");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/places", placesRouter);
app.use("/api/users", usersRouter);
// app.use("/api/reviews", reviewsRouter);
app.use("/uploads", express.static("public"));

// const isAccessible = (path) => {
//   return fs
//     .access(path)
//     .then(() => true)
//     .catch(() => false);
// };

// const createFolderIsNotExist = async (folder) => {
//   if (!(await isAccessible(folder))) {
//     await fs.mkdir(folder);
//   }
// };

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
