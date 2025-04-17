const express = require('express')
const cacauTrybe = require('./cacauTrybe')

const app = express()

app.get('/chocolates', async (req, res) => {

    const chocolates = await cacauTrybe.getAllChocolates();
    res.status(200).json({ chocolates });
})

app.get('/chocolates/total', async (req, res) => {

    const totalChocolates = await cacauTrybe.getTotalChocolates();
    res.status(200).json({ totalChocolates });
})

module.exports = app