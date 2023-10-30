const express = require('express');
const router = express.Router()
const { getCharById } = require('../controllers/getCharById');
const { postFav ,deleteFav,getFav} = require('../controllers/handleFavorites');
const { login } = require('../controllers/login');



router.get('/character/:id',getCharById)
router.get('/login', login)
router.post('/fav', postFav)
router.get('/fav', getFav)
router.delete('/fav/:id', deleteFav)

module.exports={router}