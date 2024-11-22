
import { ListaUsuarios } from '../widgets/Usuarios/ListaUsuarios'
import { BarritaFoot } from '../widgets/Paqueteria/BarritaFoot'
import { BarraUser } from '../widgets/Usuarios/BarraUser'
import { ModalUser } from '../widgets/Modal/ModalUser'
import { ModalUserActualiza } from '../widgets/Modal/ModalUserActualiza'

export const Usuarios = () => {
    return (
        <section className="bg-gradient-to-b from-pink-500 to-gray-900 py-3 sm:py-5">
        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
            <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
             
                <BarraUser/>
                <ModalUser/>
                <ModalUserActualiza/>
                <ListaUsuarios />
                <BarritaFoot />
                
            </div>
        </div>
    </section>
    )
}
