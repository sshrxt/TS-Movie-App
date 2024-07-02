import express from 'express'
import path from 'path'
import popularMoviesRouter from './routes/trending.js'
import advancedMovieRouter from './routes/advanced.js'

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use('/search', advancedMovieRouter);
app.use('/trending', popularMoviesRouter)

app.all('*', (req, res) => {
    res.status(404);
} )

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));