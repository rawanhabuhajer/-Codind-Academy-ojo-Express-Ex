const axios = require("axios");
const express = require("express");
const app = express();
const router = express.Router();
app.use(express.json());
const apiData =[];
axios
.get("https://random-data-api.com/api/v2/users?size=2&is_xml=true")
.then((resp) => {
   const apiData = resp.data;
   console.log(apiData);
   
    router.get("/", (req, res) => {
      res.send("your port is running in port 8000");
    });

    router.get("/public", (req, res) => {
      res.send(apiData);
    });
   router.post("/public/create", (req, res) => {
      const newData = req.body;
      apiData.push(newData);
      res.send(apiData);
    });
    router.patch("/public/edit/:id", (req, res) => {
      const id = req.params.id*1; 
      const newData = req.body; 
      const dataIndex = apiData.findIndex((item) => item.id === id);
       apiData[dataIndex] = { ...apiData[dataIndex], ...newData };
        res.send(apiData);
      
      
    });

    router.delete("/public/delete/:id", (req, res) => {
      const id = req.params.id *1 ;
         const deleteData = req.body;
         const deletepublic = apiData.find(el=> el.id === id)
         apiData.splice(deleteData , 1)
     
    });
 
    });



  
module.exports = router;
