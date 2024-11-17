import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"
import { Cuerpo } from "./Tabla/Cuerpo"


export const Tabla = () => {
   
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                          
                        </th>
                        <th scope="col" className="px-4 py-3">tracking</th>
                        <th scope="col" className="px-4 py-3">email</th>
                        <th scope="col" className="px-4 py-3">estado</th>
                        <th scope="col" className="px-4 py-3">plan</th>
                        <th scope="col" className="px-4 py-3">peso</th>
                        <th scope="col" className="px-4 py-3">sub-total</th>
                        <th scope="col" className="px-4 py-3">total</th>
                        <th scope="col" className="px-4 py-3">fecha registro</th>
                    </tr>
                </thead>
                <Cuerpo/>
            </table>
        </div>
    )
}