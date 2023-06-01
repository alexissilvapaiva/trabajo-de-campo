import React from 'react'
import LoginPagina from '../paginas/LoginPagina'
import HomePagina from '../paginas/HomePagina'
import AltaPagina from '../paginas/AltaPagina'
import NotFoundPage from '../paginas/NotFoundPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AgregarAlumno from '../componentes/AgregarAlumno'
export default function AppRouter() {
  
  return (
   <BrowserRouter>
        <Routes>
            <Route exact path='/'  element={<LoginPagina/>}></Route>   
            <Route exact path='/home'       element={<HomePagina/> }></Route>
            <Route exact path='/registrar'   element={<AltaPagina/>}></Route> 
            <Route path='/agregaralumno' element= {<AgregarAlumno/>} exact></Route>
          <Route exact path='*'       element={<NotFoundPage/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
