import React, { useState, useEffect } from 'react'
import AlumnoIndividual from './AlumnoIndividual'
import axios from 'axios'

function ListarAlumos() {

const [dataAlumno, setAlumno] = useState([]);

useEffect(() => {
    axios.get('/mostraralumnos').then(res => {
      setAlumno(res.data)
    }).catch(err => {
      console.log(err)
    })
}, [])

//mapear listaAlumno en objeto Alumnoindiviual
const listaAlumno = dataAlumno.map(alumno => {
    return (
  <AlumnoIndividual alumno={alumno}/> 
    )
})
  return (
    <div>
      <div className='container'> 
      <h1>
      ListarAlumos
      </h1> 
      </div>
      <div className='container'> 
      <div className='row'>
        <div className='col'>
          <table className="table table-striped">
       <thead  >
            <tr>
           <th >Name</th>
            <th >Last Name</th>
            <th >DNI</th>
             <th >Tutor</th>     
             <th ></th>                 
            </tr>
           </thead>
          <tbody>
     {listaAlumno}
     </tbody>
     </table>
          </div>
         </div>
     </div>
      </div>
  )
}

export default ListarAlumos