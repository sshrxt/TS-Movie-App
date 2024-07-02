import express from 'express'
const router = express.Router()
import fetch from 'node-fetch'

const API_KEY = 'f48dd460e6a0038d30b7ebb29c9713ca'

router.use('/', async (req, res) => {
    try {
        const searchQuery = req.query.search;
        if(!searchQuery) {
            return res.status(400).json({msg: "Query is required"})
        }
        
        const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchQuery)}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();


        if(!response.ok) {
            console.error('Error fetching movies');
            res.status(response.status).json({msg: "Error, failed to fetchmovies"});
        }
        else {
            res.json(data);
        }

    }
    catch(err){
        res.status(500).json({error: `Error: ${err.message}`})
    }
})

export default router;