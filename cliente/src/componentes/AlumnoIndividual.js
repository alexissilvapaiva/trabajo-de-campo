import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
//&nbsp; --> separa los botones
//esto es un compoenente que LISTA componentes --> ej, funcion que lista ALUMNOS

function AlumnoIndividual({alumno}) {

const navegar = useNavigate();

function borrarAlumno(_id) {
  
  axios.post('/borraralumno', {_id : _id})
 .then(res => {
      console.log(res.data)
      Swal.fire('LISTO!','El usuario fue ELIMINADO')
      navegar(0);
 }).catch(error => console.log(error))
}
/*
 nombre : nombre,
    apellido : apellido,
    dni : dni,
    tutor : tutor 
*/
  return (
    <div className='container'>
        <div className='row'></div>
          <div className='col-sm-6 offset-3'>
              <ul className='list-group'> 
             <li className='list-group-item'>{alumno.nombre}</li>
            <li className='list-group-item'>{alumno.apellido}</li>
             <li className='list-group-item'>{alumno.dni}</li>
            <li className='list-group-item'>{alumno.tutor}</li>
             </ul>
            <Link to={`/editaralumno/${alumno._id}`}> <li className='btn btn-success'>Editar</li></Link>
             &nbsp;
              <button className='btn btn-danger' onClick={()=> {borrarAlumno(alumno._id)}}>Borrar</button>
              <hr className='mt-4'/>

          </div>
      </div>
  )
}

export default AlumnoIndividual