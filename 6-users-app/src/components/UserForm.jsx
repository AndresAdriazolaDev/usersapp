import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export const UserForm = ({
  userSelected,
  handlerAddUser,
  initialUserForm,
  handlerCloseForm,
}) => {
  const [userForm, setUserForm] = useState(initialUserForm);

  const { id, nombre, password, correo } = userForm;

  useEffect(() => {
    setUserForm({
      ...userSelected,
      password: "",
    });
  }, [userSelected]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const insertData = async (data) => {
    try {
      await addDoc(collection(db, "usuarios"), data);
      console.log("Data inserted successfully!");
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!nombre || (!password && id === 0) || !correo) {
      Swal.fire(
        "Error de validacion",
        "Debe completar los campos del formulario!",
        "error"
      );
      return;
    }
    if (!correo.includes("@")) {
      Swal.fire(
        "Error de validacion correo",
        "El correo debe ser valido, incluir un @!",
        "error"
      );
      return;
    }

    // Crear un objeto con los campos necesarios
    const userData = { nombre, password, correo };

    handlerAddUser(userForm);
    await insertData(userData); // Pasar userData en lugar de userForm
    setUserForm(initialUserForm);
  };

  const onCloseForm = () => {
    handlerCloseForm();
    setUserForm(initialUserForm);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control my-3 w-75"
        placeholder="Nombre de usuario"
        name="nombre"
        value={nombre}
        onChange={onInputChange}
      />
      {id > 0 || (
        <input
          className="form-control my-3 w-75"
          placeholder="Contraseña"
          type="password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
      )}
      <input
        className="form-control my-3 w-75"
        placeholder="Correo electrónico"
        name="correo"
        value={correo}
        onChange={onInputChange}
      />
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-primary" type="submit">
        {id > 0 ? "Editar" : "Crear"}
      </button>
      {!handlerCloseForm || (
        <button
          className="btn btn-primary mx-2"
          type="button"
          onClick={() => onCloseForm()}
        >
          Cerrar
        </button>
      )}
    </form>
  );
};
