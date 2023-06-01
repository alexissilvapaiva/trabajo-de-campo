const AlumnosDB = require('../models/Alumnos');

const crearAlumno = async (req, res) => {
  const { nombre, apellido, dni, tutor } = req.body;

  try {
    const newAlumno = new AlumnosDB({
    nombre,
    apellido,
    dni, 
    tutor,
    });

    const alumnoSaved= await newAlumno.save();

    res.status(201).json(alumnoSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

 const getAlumno = async (req, res) => {
  const alumnos = await AlumnosDB.find();
  return res.json(alumnos);
};


 const getAlumnoById = async (req, res) => {
  const { alumnoId } = req.params;

  const alumno = await AlumnosDB.findById(alumnoId);
  res.status(200).json(alumno);
};




module.exports = { crearAlumno, getAlumno, getAlumnoById }