import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export const UserRow = ({ handlerUserSelectedForm, handlerRemoveUser, id, username, email }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <NavLink
                    className="btn btn-secondary btn-sm"
                    to={'/users/edit/' + id}
                >
                    <FontAwesomeIcon icon={faEdit} /> 
                </NavLink>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handlerRemoveUser(id)}
                >
                    <FontAwesomeIcon icon={faTrash} /> 
                </button>
            </td>
        </tr>
    );
};
