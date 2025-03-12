const fs = require('fs/promises')
const express = require('express')
const app = express()
const port = 3000

const readMovies = async () => {
    const movies = await fs.readFile('src/movies.json', 'utf-8');

    return JSON.parse(movies)
}

app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

app.get('/movies/:id', async (req, res) => {
    const movieId = req.params.id
    const movies = await readMovies()
    const movie = movies.find((movie)=> movie.id == movieId)


    res.send(movie)
})

app.listen(port, () => {
    console.log(`App de exemplo esta rodando na porta ${port}`)
})

