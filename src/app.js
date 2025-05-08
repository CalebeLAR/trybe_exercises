const express = require('express')
const cacauTrybe = require('./cacauTrybe')

const app = express()

const MAP_STATUS = {
    OK: 200,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
}

app.get('/chocolates/search', async (req, res) => {
    const { name } = req.query;

    const searchedChocolates = await cacauTrybe.getChocolatesSearch(name);

    if (searchedChocolates.length === 0) {
        return res.status(MAP_STATUS.NOT_FOUND).json({ searchedChocolates });
    }

    res.status(MAP_STATUS.OK).json({ searchedChocolates });
})

app.get('/chocolates', async (req, res) => {

    const chocolates = await cacauTrybe.getAllChocolates();
    res.status(MAP_STATUS.OK).json({ chocolates });
})

app.get('/chocolates/total', async (req, res) => {

    const totalChocolates = await cacauTrybe.getTotalChocolates();
    res.status(MAP_STATUS.OK).json({ totalChocolates });
})

module.exports = app