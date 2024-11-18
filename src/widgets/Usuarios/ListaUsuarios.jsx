import { Cuerpo } from "../Paqueteria/Tabla/Cuerpo"
import { CuerpoUser } from "./CuerpoUser"


export const ListaUsuarios = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">

            </th>
            <th scope="col" className="px-4 py-3">ID</th>
            <th scope="col" className="px-4 py-3">Email</th>
            <th scope="col" className="px-4 py-3">Usuario</th>
            <th scope="col" className="px-4 py-3">Role</th>
            <th scope="col" className="px-4 py-3">Plan</th>
            <th scope="col" className="px-4 py-3">Creado</th>
            <th scope="col" className="px-4 py-3">Editado</th>
          </tr>
        </thead>
        <CuerpoUser />
      </table>
    </div>

  )
}
