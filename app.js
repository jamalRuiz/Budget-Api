const express = require("express");
const app = express();
const budgetController = require("./controller/budgetController.js")
const cors = require("cors");
app.use(cors())
app.use("/transactions", express.json(), budgetController);


app.get("/", (req,res)=> {
    res.send('Welcome to the Budget Api')
})
app.get("*", (req,res) => {
    res.status(404).json({error: "page not found"})
})

module.exports = app;