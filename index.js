const axios = require('axios');
const express = require("express");
const app = express();

const http = axios.create({
  baseURL: "https://academichub-restapi.onrender.com/",
});

function sample(){
    console.log(1);
    
}


app.get("/", (req,res) => {

    setInterval(()=>{
        axios.get("https://academichub-restapi.onrender.com/").then((result)=>{
            console.log(result.data);
            res.send(result.data);
        }).catch(error => error)
    },800000);
    
});

app.listen(8000, () => {});
