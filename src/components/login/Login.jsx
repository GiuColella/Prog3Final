import { Link } from 'react-router-dom';
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function Login () {
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
      <div className='p-3 bg-white w-25'>
        <form action="">
        <div className='mb-3'>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Enter Email' className='form-control' />
          </div>
          <div className='mb-3'>
            <label htmlFor="password">Contraseña</label>
          <input type="password" placeholder='Enter Password' className='form-control'/>
          </div>
          <button className='btn btn-success'>Login</button>
        </form>
      </div>
    </div>
  )
}
}
/*export default function Login() {
  const loguear = async () => {
    let user = document.getElementById("usuar").value;
    let pass = document.getElementById("passw").value;

    try {
      const response = await axios.post('http://localhost:3306', { username: user, password: pass });
      if (response.data) {
        alert('Usuario Correcto');
        history.push('/');
      } else {
        alert("Usuario Incorrecto");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className='content_box'>
        <div className='caja'>
          <div className='box_img'>
            <img src='/O.jpg' alt='logo' />
          </div>
          <h1 className='txt_log'>Login</h1>
          <form id='formulario'>
            <div className='content__main'>
              <div className='content__main_inp'>
                <img className='icon_txt' src='./icons/usuario.png' alt='' />
                <input id='usuar' className='box_txt' type='text' placeholder='Usuario' />
              </div>
              <div className='content__main_inp'>
                <img className='icon_txt' src='./icons/candado-cerrado.png' alt='' />
                <input id='passw' className='box_txt' type='password' placeholder='Contraseña' />
              </div>
              <div className='btn_recorder'>
                <input className='' type='checkbox' />
                <p>Recordarme</p>
              </div>
            </div>
            <div className=''>
              <a href='' className='txt_olvPass'>
                Olvidaste tu contraseña?
              </a>
              <div className='contenedor_btn'>
                <Link to="/" className='btn_login'>
                  <button onClick={loguear}>
                    Iniciar Sesión
                  </button>
                </Link>

              </div>
            </div>
          </form>
          <div className='txt_reg'>
            <p>No tienes cuenta?</p>
            <Link to='/registro'>

              Registrarse
            </Link>
          </div>
        </div>

      </div>

    </>
  );
}
*/