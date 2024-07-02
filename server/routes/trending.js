import express from 'express';
const router = express.Router();
import fetch from 'node-fetch'

router.get('/', async(req, res)=> {
    try{
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=f48dd460e6a0038d30b7ebb29c9713ca';

        const response = await fetch(url);
        const data = await response.json();

        if(response.ok){
            res.json(data);
        }
        else {
            console.error('Error fetching movies');
            res.status(response.status).json({msg: "Error, failed to fetchmovies"});
        }
    }
    catch(error) {
        res.status(500).json({ error: 'Internal server error' });
    }
})

export default router;