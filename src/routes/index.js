const express = require('express');
const router = express.Router();

const movies_router=require('../apiServices/peliculas/routes');

router.use('/movies', movies_router);



module.exports = router;