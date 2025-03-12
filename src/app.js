const fs = require('fs/promises')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})

const readFile = async () => {
    const movies = await fs.readFile('src/movies.json', 'utf-8');

    console.log(movies)
}

readFile()