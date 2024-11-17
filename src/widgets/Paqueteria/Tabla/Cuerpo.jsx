import React, { useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';
import { Normal } from './Cuerpo/Normal';
import { Filtrado } from './Cuerpo/Filtrado';

export const Cuerpo = () => {
    const { paquetes, filtro } = useContext(UserContext);
    sessionStorage.setItem('paquetes', JSON.stringify(paquetes))

    return (
        <tbody>
            {filtro.length > 0 ? (
                paquetes.filter((n) => n.email === filtro || n.tracking === filtro).map((n) => (
                    <Filtrado n={n} />
                ))

            ) : paquetes.length > 0 ? (
                paquetes.map((n) => (
                    <Normal n={n} />
                ))
            ) : (
                <tr>
                    <td colSpan="8" className="text-center py-3">No hay Datos</td>
                </tr>
            )}
        </tbody>
    );
};
