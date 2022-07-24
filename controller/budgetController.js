const express = require("express");
const budget = express.Router();
const budgetArray= require("../model/budgetModel.js")

budget.get("/", (req, res) => {
    res.json(budgetArray);
  });
  budget.get("/:id", (req, res) => {
      const { id } = req.params;
      if (budgetArray[id]) {
        res.send(budgetArray[id]);
      } else {
        res.redirect("*");
      }
    });
    
    budget.post("/", (req, res) => {
      budgetArray.push(req.body);
      res.json(budgetArray[budgetArray.length - 1]);
    });
    budget.delete("/:id", (req, res)=> {
      const {id} = req.params
      const deletedBudget = budgetArray.splice(id, 1)
      res.status(200).json(deletedBudget)
  });
  budget.put("/:id", (req,res) => {
      const {id} = req.params
      budgetArray[id] = req.body
      res.status(200).json(budgetArray[id])
  });
  
  

module.exports = budget