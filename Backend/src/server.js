require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const generateContent = require("./config/ai.config");


app.use(cors())
app.use(express.json());


app.post("/code", async (req,res)=>{
    const {code} = req.body;
    const result = await generateContent(code)

    res.status(200).json({
        message:'Data Fetched',
        result
    })
})



app.listen(3000,()=>{
    console.log('Server runnig on pot 3000')
})