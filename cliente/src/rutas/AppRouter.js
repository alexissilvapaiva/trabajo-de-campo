import React from 'react'
import LoginPagina from '../paginas/LoginPagina'
import HomePagina from '../paginas/HomePagina'
import AltaPagina from '../paginas/AltaPagina'
import NotFoundPage from '../paginas/NotFoundPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AgregarAlumno from '../componentes/AgregarAlumno'
import ListarAlumos from '../componentes/ListarAlumnos'
import EditarUsuario from '../componentes/EditarAlumno'
import Nav from '../componentes/Nav'
export default function AppRouter() {
  
  return (
    
   <BrowserRouter>
   <Nav/>
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

  )
}
