var express = require("express");
var router = express.Router();
/* GET home page. */
var axios = require("axios");

router.get("/data", async function (req, res) {
  const da = await axios.get("https://workshop-backend-t22.herokuapp.com");
  console.log(da.data);
  res.send(da.data);
});

module.exports = router;
