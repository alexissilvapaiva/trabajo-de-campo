import React, {useState} from 'react'
import './cssPages/LoginPage.css'
import reactImg from './img/imagen1r.png'
import mongoImg from './img/mongoImagen.png'
import nodeImg from './img/nodeImagen.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function LoginPage() {
      const navegar = useNavigate();
      const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

      axios.defaults.withCredentials = true;

      
      const handleSubmit = async (e) => {
              const usuario = {
           email: email,
          password: password
  }
        e.preventDefault();
         await axios.post('/login',usuario,{
        headers: {'Content-Type': 'application/json'}
      })
          .then(res => {
                  if(res.data){
                    navegar('/home')
               
                  }
          }).catch(err => alert(err))
      }
  
  return (
    <div className="jumbotron">
  <div className="container">
    <span className="glyphicon glyphicon-list-alt"></span>
    <h2>LOGIN</h2>
    <div>
    <img src={reactImg} alt='reactImagen' width='100px'/>
    <img src={nodeImg} alt='nodeImagen' width='100px'/>
    </div>
    <div>
     <img src={mongoImg} alt='mongoImagen' width='100px'/>
    </div>
    <div className="box">
      <form >
      <input type="text" placeholder="Email" name='email'
              onChange={(e) => {setEmail(e.target.value)}}></input>
	    <input type="password" placeholder="Contraseña" name='contraseña' 
                onChange={(e) => {setPassword(e.target.value)}}></input>
	    <button className='btn btn-success' onClick={handleSubmit}>Entrar</button>
    </form>
    </div>
  </div>
</div>
  )
}