const express = require('express')
const router = express.Router()
const path = require('path')


router.use(express.json())
router.use(express.urlencoded({ extended: false }))


const Transaction = require('../models/Transaction')

router.post('/transaction',async function(req,res)
{
    let transaction = await new Transaction(req.body)
    transaction.save()
    res.send("saved successfully")
})

router.delete('/transaction',async (req,res) =>
{
    const transaction = req.body
    const deleted =  await Transaction.findOneAndDelete({_id: transaction._id})
    res.send(`deleted successfully ${deleted}`)
})

router.get('/transactions',async function(req,res)
{
    let transactions = await Transaction.find()
    res.send(transactions)
})
module.exports = router 