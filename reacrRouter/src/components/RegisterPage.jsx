import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addUserToList } from './userList'

const RegisterPage = () => {
  const navigate = useNavigate()
  const [errorsValidations, setErrorsValidations] = useState([])
  const [formData, setFormData] = useState({})

  const formDataHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value !== undefined ? e.target.value : undefined
    })
  }

  const validations = () => {
    const errors = [];
    if (formData.dni == undefined) {
      errors.push({
        name: "dni",
        type: "text",
        description: "el campo DNI esta vacio"
      })
    }
    if (formData.dni.length !== 10) {
      errors.push({
        name: "dni",
        type: "text",
        description: "el campo DNI debe tener 10 caracteres"
      })
    }
    if (formData.nombre == undefined) {
      errors.push({
        name: "nombre",
        type: "text",
        description: "el campo nombre esta vacio"
      })
    }
    if (formData.apellido == undefined) {
      errors.push({
        name: "apellido",
        type: "text",
        description: "el campo apellido esta vacio"
      })
    }
    if (formData.email == undefined) {
      errors.push({
        name: "email",
        type: "text",
        description: "el campo email esta vacio"
      })
    }
    if (formData.password == undefined) {
      errors.push({
        name: "password",
        type: "text",
        description: "el campo password esta vacio"
      })
    }
    return errors.length > 0 ? errors : undefined;
  }

  const sendFormHandler = () => {
    const errors = validations();
    console.log(errors)
    if (errors) {
      const alertValidation = errors.filter(e => e.type === "alert");
      alertValidation.forEach(a => alert(a.description));
      setErrorsValidations(errors.filter(e => e.type === "text"));
    } else {
      alert("Los datos han sido enviados");
      setErrorsValidations([]);
      addUserToList(formData);
      navigate("/"); 
    }


  }

  return (
    <>
      <div>
        <h2>Register</h2>
        <div>
          {errorsValidations.map((error, index) => (
            <span key={index} style={{ color: "red", display: "flex", flexDirection: "column" }}>{error.description}</span>
          ))}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>DNI:</label>
            <input type="text" name='dni' onChange={(e) => formDataHandler(e)} />
            <label>Nombre:</label>
            <input type="text" name='nombre' onChange={(e) => formDataHandler(e)} />
            <label>Apellido:</label>
            <input type="text" name='apellido' onChange={(e) => formDataHandler(e)} />
            <label>Email:</label>
            <input type="text" name='email' onChange={(e) => formDataHandler(e)} />
            <label>Password:</label>
            <input type="password" name='password' onChange={(e) => formDataHandler(e)} />
            <button onClick={sendFormHandler}>enviar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
