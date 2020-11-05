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
  // in my opinion, it will be better to send back some error codes indicating whether it is success on inserting new users. Their might be a lot of reasons and
  // it will be better to use response code to reflect whether the operations is success and if failed, use body to indidacte that what is the faliure reason.
  // this will be better than simply re-direct
  res.redirect("/");
});

module.exports = router;

// the code here seems that you are not finish implementing all features as what is shown in the front end code. It will be a good practice and the website will be perfect if all those features are impelemnted!
