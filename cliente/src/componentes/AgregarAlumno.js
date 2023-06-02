import React, {useState} from 'react'
//import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'

function AgregarAlumno() {
 //creamos los hooks para canda caracteristica de nuestro ALUMNO
const [nombre, setNombre] = useState('');
const [apellido, setApellido] = useState('');
const [dni, setDni] = useState('');
const [tutor, setTutor] = useState('');

function agregarAlumno() {
  const alumno = {
    nombre : nombre,
    apellido : apellido,
    dni : dni,
    tutor : tutor
  }
  console.log(alumno)

  axios.post('/agregaralumno' , alumno, {
        headers: {'Content-Type': 'application/json'}
      }).then(res => {Swal.fire('LISTO!','El usuario se creo correctamente')})
      .catch(err => {console.log(err)})
}

  return (
    <div className='container'>
      <div className='row'>
    <h2 className='mt-4'>Crear un nuevo Alumno</h2>
      </div>

     <div className='row'>
      <div className='col-sm-6 offset-3'>
      <div className='mb-3'>
    <label htmlFor="nombre" className='form-label'>Nombre</label>
    <input type="text" className='form-control' value={nombre} onChange={(e) =>{setNombre(e.target.value)}}></input>
      </div>
       <div className='mb-3'>
    <label htmlFor="edad" className='form-label'>Apellido</label>
    <input type="text" className='form-control' value={apellido} onChange={(e) =>{setApellido(e.target.value)}}></input>
      </div>
      <div className='mb-3'>
    <label htmlFor="nombre" className='form-label'>Dni</label>
    <input type="text" className='form-control' value={dni} onChange={(e) =>{setDni(e.target.value)}}></input>
      </div>
      <div className='mb-3'>
    <label htmlFor="nombre" className='form-label'>tutor</label>
    <input type="text" className='form-control' value={tutor} onChange={(e) =>{setTutor(e.target.value)}}></input>
      </div>
      
    <button onClick={agregarAlumno} className='btn btn-success'>Guardar Alumno</button>
      </div>
    </div>
 </div>
  )
}

export default AgregarAlumno ;