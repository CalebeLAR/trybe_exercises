const fs = require('fs/promises')
const express = require('express')
const { json } = require('stream/consumers')

const app = express()
const port = 3000

app.use(express.json())

const readMovies = async () => {
    const movies = await fs.readFile('src/movies.json', 'utf-8');

    return JSON.parse(movies)
}

app.get('/', (_req, res) => {
    res.send('Olá Mundo!')
})

app.get('/movies/:id', async (req, res) => {
    const movieId = req.params.id
    const movies = await readMovies()
    const movie = movies.find((movie) => Number(movie.id) == movieId)


    res.send(movie)
})


app.get('/movies', async (_req, res) => {
    const movies = await readMovies()

    res.send(movies)
})

app.post('/movies', async (req, res) => {
    const movies = await readMovies()
    
    const newId = movies.reduce((newId, movie) => (newId <= movie.id) ? newId = +movie.id + 1 : newId, 0)
    const newMovie = { id: newId, ...req.body }
    
    movies.push(newMovie)
    await fs.writeFile('src/movies.json', JSON.stringify(movies));

    res.send(newMovie)
})



app.listen(port, () => {
    console.log(`App de exemplo esta rodando na porta ${port}`)
})

