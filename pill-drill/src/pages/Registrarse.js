import React, { useRef, useState } from 'react';
import Link from 'next/link';
import style from '../styles/Registrarse.module.css';
import Button from '../components/Buttons';

const Registrarse = () => {
  const form = useRef();
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  // const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const registrarse = async (e) => {
    e.preventDefault();

    console.log("AAAAAAAA");

    console.log(form.current.querySelector("#nombre"));
    console.log(form.current.querySelector('#email'));
    console.log(form.current.querySelector('#contraseña'));
    console.log(form.current.querySelector('#ConfirmContraseña'));


    const nombre = form.current.target.chlildren("#nombre");
    const password = form.current.target.chlildren("#contraseña");
    const mail = form.current.target.chlildren("#email");
    const Confirmpassword = form.current.target.chlildren("#ConfirmContraseña");
    // const password = 

    if (password == Confirmpassword) {
      console.error('Las contraseñas no coinciden.');
      return;

    }

    try {
      const response = await fetch('http://localhost:5000/registrarse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, mail, password, Confirmpassword }),
      });

      if (response.ok) {
        // La solicitud fue exitosa, puedes realizar alguna acción aquí si es necesario.
        console.log('Registro exitoso');
        history.push('/InicioSesion');
      } else {
        // La solicitud falló, manejar el error aquí si es necesario.
        console.error('Error al registrar');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <form ref={form}>
      <div className={style.flexbox}>
        <h1 className={style.title}></h1>

        <div className={style.contenedorflotante}>
          <input type="input" className="form-control" id="nombre" placeholder="Nombre Completo" />
        </div>

        <div className={style.contenedorflotante}>
          <input type="input" className="form-control" id="email" placeholder="nombre@ejemplo.com"  />
        </div>

        <div className={style.contenedorflotante}>
          <input type="password" className="form-control" id="contraseña" placeholder="Contraseña" />
        </div>

        <div className={style.contenedorflotante}>
          <input type="password" className="form-control" id="ConfirmContraseña" placeholder="Repita la Contraseña" />
        </div>

      </div>

      <label className={style.seguimiento}>
        Hay alguna persona que te hará un seguimiento en tu app?
      </label>


      <div className={style.checkBox}>

        <input type="checkbox" value="yes" /> SI

      </div>

      <div className={style.container}>
        <button className={style.IR} onClick={registrarse}>IR</button> <br />



        <div>
          <label className={style.cuenta}>
            ¿Tenes una cuenta?
          </label>
          <Link href="/InicioSesion">  Iniciar Sesion</Link>

        </div>


      </div>
    </form>
  );
};

export default Registrarse;