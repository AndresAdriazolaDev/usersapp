import { UserRow } from "./UserRow"

export const UsersList = ({ handlerUserSelectedForm, handlerRemoveUser, users = [] }) => {

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
                {
                    users.map(({id, username, email }) => (
                        <UserRow
                            key={id}
                            id={id}
                            username={username}
                            email={email}
                            handlerUserSelectedForm={handlerUserSelectedForm}
                            handlerRemoveUser={handlerRemoveUser} />
                    ))
                }
            </tbody>
        </table>
    )
}