const express = require("express");
const router = express.Router();

const myDB = require("../db/userdb.js");

/* GET users */
router.get("/users", async (req, res, next) => {
  const users = await myDB.getUsers();
  res.json(users);
});

/*INSERT users */
router.post("./newUsers'", async (req, res) => {
  const user = req.body;

  await myDB.insertUser(user);

  res.redirect("/");
});

module.exports = router;
