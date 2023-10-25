require("dotenv").config();
require("./db/connection")
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const routes = require("./routes/TodoRouter");


// middleware
app.use(cors());
app.use(express.json());

app.use("/api" , routes);

app.get("/" , (req,res)=>{
    res.json("server start");
})

const server = app.listen(PORT , ()=>{
    console.log(`server is started at ${PORT}`)
});
