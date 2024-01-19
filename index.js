const axios = require("axios");
const express = require("express");
const app = express();

function callApi() {
  axios
    .get("https://academichub-restapi.onrender.com/")
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {console.log(error);});

}

setInterval(async()=>{
  callApi();
},10000)

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(8000, () => {});
