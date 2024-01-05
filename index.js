const axios = require("axios");
const express = require("express");
const cron = require('node-cron');
const app = express();

function callApi() {
  axios
    .get("https://academichub-restapi.onrender.com/")
    .then((result) => {
      console.log(result.data);
    })
    .catch((error) => error);
}

cron.schedule('*/13 * * * *',()=>{
    callApi();

})

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(8000, () => {});
