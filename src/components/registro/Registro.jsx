import React from "react";
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Registro() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleRegister = async () => {
    try {
      // Reemplaza la URL con la dirección de tu servidor
      const response = await axios.get(`http://localhost:5173/registro${username}`);
      if (response.data) {
        alert('El usuario ya está registrado');
        return;
      }
    } catch (error) {
      console.error(error);
      alert('No se pudo registrar el usuario');
    }

    try {
      // Reemplaza la URL con la dirección de tu servidor
      await axios.post(`http://localhost:5173`, { username, password });
      setRegistered(true);
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="content_box">
      <div className="caja">
        <div className="box_img">
          <img src="/O.jpg" alt="logo" />
        </div>
        <h1 className='txt_log'>Register</h1>
        <form>
          <div className="content__main">
            {registered ? (
              <h2>Registro Exitoso</h2>)
              : (<div className='content__main_inp' >
                <div className='content__main_inp'>

                  <input
                    className="box_txt"
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className='content__main_inp'>

                  <input
                    className="box_txt"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="contenedor_btn">
                  <Link to='/login'>
                    <button onClick={handleRegister}> Registrarse </button>
                  </Link>
                </div>

              </div>
              )}
          </div>
        </form>
      </div>
    </div>
  )
}
