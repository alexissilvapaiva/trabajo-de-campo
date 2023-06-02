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
<div>
  <AlumnoIndividual alumno={alumno}/> 
</div>
    )
})
  return (
    <div>
      <h1>
      ListarAlumos
     {listaAlumno}
      </h1></div>
  )
}

export default ListarAlumos