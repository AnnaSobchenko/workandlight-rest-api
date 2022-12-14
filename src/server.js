const app = require("./app");
// const path = require("path");
// const express = require("express");
const { connectMongo } = require("./db/connections");

require("dotenv").config();
// const UPLOAD_DIR =path.join(__dirname, process.env.UPLOAD_DIR);

const PORT = process.env.PORT || 3001;

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

const main = async () => {
  try {
    await connectMongo();
    console.log("Database connection successful");
    app.listen(PORT, async (err) => {
      if (err) console.error("Error at aserver launch:", err);
      // await createFolderIsNotExist(UPLOAD_DIR);
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (err) {
    console.log(`Failed to launch applicatin with error ${err.message}`);
    process.exit(1);
  }
};

main();
