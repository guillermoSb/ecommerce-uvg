import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { regular_login } from "../login/firebaselogin";

export default function Login() {
  const [loading, setLoading] = useState(false);

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
      alert("Usuario registrado con exito");
    } catch (error) {
      alert("Usuario o contraseña incorrecta. Asegurese que todo este bien");
    }
    setLoading(false);
  } // your form submit function which will invoke after successful validation

  // you can watch individual input by pass the name of the input

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label>Email </label>
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
        <label>Password </label>
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

        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}
