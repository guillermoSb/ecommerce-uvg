import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {
  regular_login,
  signOutAccount,
  google_auth,
  getUser,
  facebook_auth,
} from "../firebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import "../styles/login.css";
import profile_img from '../assets/profile.png';

const auth = getAuth();

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [email, setEmail] = useState("");

  const handleSignOut = () => {
    signOutAccount();
    setUserInfo("");
  };

  function googleAuth() {
    setLoading(true);
    google_auth();
    setLoading(false);
  }

  function fbAuth() {
    setLoading(true);
    facebook_auth();
    setLoading(false);
  }

  function resetPassword(email) {
    alert("Correo enviado!");
    return sendPasswordResetEmail(auth, email, {
      url: "https://localhost:8080",
    });
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  async function onSubmit() {
    setLoading(true);
    try {
      await regular_login(watch("email"), watch("password"));
      setUserInfo(watch("email"));
      alert("Usuario logueado con exito");
    } catch (error) {
      alert("Usuario o contraseña incorrecta. Asegurese que todo este bien");
    }
    setLoading(false);
  } // your form submit function which will invoke after successful validation

  // you can watch individual input by pass the name of the input

  return (
    <div className="loginWrap">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <img src ={profile_img} alt="loading"></img>
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "Este campo es requerido",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "El email debe de contener una @",
            },
          })}
        />
        <p>{errors.email?.message}</p>
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Este campo es requerido",
            minLength: {
              value: 8,
              message: "El mínimo de caracteres es 8",
            },
          })}
        />
        <p>{errors.password?.message}</p>

        {/* include validation with required or other standard HTML validation rules */}
        {/* errors will return when field validation fails  */}

        <input className ="login_button" type="submit" value="Log In" />
      </form>
      <p>Bienvenido {userInfo}</p>
      <button className = "google_button" onClick={() => googleAuth()}>Google</button>
      <button className = "facebook_button" onClick={() => fbAuth()}>Facebook</button>
      <hr />
      <p>¿Olvidaste tu contraseña?</p>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br />
      <button className="resetPassword_button" onClick={() => resetPassword(email)}>
        Restablecer contraseña
      </button>
      <p>Not a member? <span><a href="/signup">Sign up now</a></span></p>
    </div>
  );
}
