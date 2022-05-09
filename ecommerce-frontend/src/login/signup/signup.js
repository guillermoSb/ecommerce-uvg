import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { regular_signup } from "../firebaselogin";
import profile_img from './profile.png';

import './signup.css';

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function onSubmit() {
    setLoading(true);
    try {
      if (watch("password") === watch("passwordConfirmation")) {
        await regular_signup(watch("email"), watch("password"));
        alert("Usuario registrado con exito");
      } else {
        alert("Las contraseñas no coinciden");
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("ERROR: Este correo ya esta en uso.");
      } else if (error.code === "auth/invalid-email") {
        alert("ERROR: Esta dirección de correo no es valida.");
      }
    }
    setLoading(false);
  } // your form submit function which will invoke after successful validation

  //console.log(watch("email")); // you can watch individual input by pass the name of the input

  return (
    <div className="signupWrap">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <img src ={profile_img} alt="loading"></img>
        <h1>Crear Cuenta</h1>
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
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("passwordConfirmation", {
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
        <input className = "signup_button" disabled={loading} type="submit" value="Sign Up" />
        <hr />
        <p className = "or">OR</p>
        <input className = "login_button" disabled={loading} type="submit" value = "Log in"/>
      </form>
    </div>
  );
}
