const express = require('express')
const router = express.Router()

const Film = require('../models/Film')
const verify = require('../verifyToken')

router.get('/', verify, async(req, res) => {
    try{
        const films = await Film.find()
        res.send(films);

    }catch(error){
        res.status(400).send({message:error})
    }
})

router.get('/:filmId', async(req, res) => {
    try{
    const filmById = await Film.findById(req.params.filmId)
        res.send(filmById);
    }catch(error){
        res.send({message:error})
    }
})

module.exports = router