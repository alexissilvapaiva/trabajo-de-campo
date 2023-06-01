const AlumnosDB = require('../models/Alumnos');


//todo ok
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

//listarAlumnos() todo ok
 const getAlumno = async (req, res) => {
  const alumnos = await AlumnosDB.find().then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      })
};

//listarAlumno() *!! se pasa por body, no por params.
 const getAlumnoById = async (req, res) => {
  const { alumnoId } = req.body;

  const alumno = await AlumnosDB.find(alumnoId);
  res.status(200).json(alumno);
};

//actualizarAlumno() * !! se pasa por body, no por params.
const upDateAlumno = async (req, res) => {
     const { _id , nombre, apellido, dni, tutor } = req.body;
        await AlumnosDB.findByIdAndUpdate( _id, {
          nombre : nombre,
          apellido : apellido,
          dni: dni,
          tutor: tutor
        }).then ( () => {
          res.send('Se actualizo Correctamente');
        }).catch(error => {
          res.send(error);
        })
}

//borrarAlumno()
const deleteAlumno = async (req,res) => {
    const { alumnoId } = req.body._id;
     await AlumnosDB.findByIdAndDelete(alumnoId)
     .then( () => {
      res.send('Alumno Eliminado');
     })
     .catch(error => {
      res.send(error);
     })
}


module.exports = { crearAlumno, getAlumno, getAlumnoById, upDateAlumno, deleteAlumno }