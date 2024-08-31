import React from 'react';
import { UserRow } from "./UserRow";
import { useEffect, useState } from "react";

import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export const UsersList = ({ handlerUserSelectedForm, users = [] }) => {
  const [usuarios, setUsuarios] = useState([]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "usuarios", id));
  };

  useEffect(() => {
    const q = query(collection(db, "usuarios"));
    const unsub = onSnapshot(q, (QuerySnapshot) => {
      let usuariosArray = [];
      QuerySnapshot.forEach((doc) => {
        usuariosArray.push({ ...doc.data(), id: doc.id });
      });
      setUsuarios(usuariosArray);
    });
    return () => unsub();
  }, []);
  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo electrónico</th>
          <th>Actualizar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => (
          <UserRow
            key={usuario.id}
            id={usuario.id}
            username={usuario.nombre}
            email={usuario.correo}
            handlerUserSelectedForm={handlerUserSelectedForm}
            handleDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
};
/*
{users.map(({ id, username, email }) => (
          <UserRow
            key={id}
            id={id}
            username={username}
            email={email}
            handlerUserSelectedForm={handlerUserSelectedForm}
            handlerRemoveUser={handlerRemoveUser}
          />
        ))}
*/
