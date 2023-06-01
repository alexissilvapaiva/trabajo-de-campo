const express = require('express');
const alumnosRouter = express.Router();
const {getAlumno, getAlumnoById, crearAlumno} = require('../controllers/alumnos.controller');
const {verificarToken, isAdmin} = require('../middlewares/authJwt')

alumnosRouter.get("/", getAlumno);

alumnosRouter.get("/:productId", getAlumnoById);

alumnosRouter.post("/", [verificarToken, isAdmin]  , crearAlumno);

module.exports =  alumnosRouter ; 