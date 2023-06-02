import React from 'react'
import LoginPagina from '../paginas/LoginPagina'
import HomePagina from '../paginas/HomePagina'
import AltaPagina from '../paginas/AltaPagina'
import NotFoundPage from '../paginas/NotFoundPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AgregarAlumno from '../componentes/AgregarAlumno'
import ListarAlumos from '../componentes/ListarAlumnos'
import EditarUsuario from '../componentes/EditarAlumno'
export default function AppRouter() {
  
  return (
     <div>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="/">PRUEBA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Inicio</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="listaralumnos">Listar Alumnos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="agregaralumno">Agregar Alumno</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

   <BrowserRouter>
        <Routes>
            <Route exact path='/'  element={<LoginPagina/>}></Route>   
            <Route exact path='/home'       element={<HomePagina/> }></Route>
            <Route exact path='/registrar'   element={<AltaPagina/>}></Route> 
             <Route path='/listaralumnos' element= {<ListarAlumos/>} exact></Route>
            <Route path='/agregaralumno' element= {<AgregarAlumno/>} exact></Route>
            <Route path='/editaralumno/:_id' element= { <EditarUsuario/>} exact></Route>
          <Route exact path='*'       element={<NotFoundPage/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  )
}
