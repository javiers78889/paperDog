import  { useContext } from 'react'
import { Filtrado } from '../Paqueteria/Tabla/Cuerpo/Filtrado';
import { UserContext } from '../../Context/UserContext';
import { Normalin } from './Opciones/Normalin';

export const CuerpoUser = () => {
    const { usuarios, filtro } = useContext(UserContext);
    sessionStorage.setItem('usuarios', JSON.stringify(usuarios))

    return (
        <tbody>
            {filtro.length > 0 ? (
                usuarios.filter((n) => n.email === filtro || n.tracking === filtro).map((n) => (
                    <></>
                ))

            ) : usuarios.length > 0 ? (
                usuarios.map((n) => (
                    <Normalin key={n.id} n={n} />
                ))
            ) : (
                <tr>
                    <td colSpan="8" className="text-center py-3">No hay Datos</td>
                </tr>
            )}
        </tbody>
    );
}
