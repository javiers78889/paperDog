import React from 'react'
import { Cuerpo } from '../widgets/Paqueteria/Tabla/Cuerpo'
import { Barrita } from '../widgets/Paqueteria/Barrita'
import { ListaUsuarios } from '../widgets/Usuarios/ListaUsuarios'
import { BarritaFoot } from '../widgets/Paqueteria/BarritaFoot'
import { BarraUser } from '../widgets/Usuarios/BarraUser'

export const Usuarios = () => {
    return (
        <section className="bg-gray-50 dark:bg-orange-600 py-3 sm:py-5">
        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
            <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
             
                <BarraUser/>
                <ListaUsuarios />
                <BarritaFoot />
                
            </div>
        </div>
    </section>
    )
}
