const express = require('express');
const controller = require('./PeliculaController');
let multipart = require('connect-multiparty');
let multipartMiddleware = multipart({ uploadDir: './src/public/portadas'});

const router = express.Router()

router.post('/newMovie', multipartMiddleware, controller.create_movie);

router.get('/list_movies', controller.list);

router.get('/one_movie/:id', controller.oneMovie);

router.post('/score', controller.score);


module.exports = router;