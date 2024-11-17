import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext';

export const Redes = () => {
    const { paquetes } = useContext(UserContext);
    const entregados= paquetes.filter((n)=>n.estado ==='Entregado')
    const pendientes= paquetes.filter((n)=>n.estado ==='pendiente')
    return (
       <section className="py-5 " >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                <div
                    className="rounded-2xl py-10 px-10 xl:py-16 xl:px-20 bg-gray-900 flex items-center justify-between flex-col gap-16 lg:flex-row"
                >
                    <div className="w-full lg:w-60">
                        <h2
                            className="font-manrope text-4xl font-bold text-orange-500 mb-4 text-center lg:text-left"
                        >
                            Estadisticas
                        </h2>
                        <p className="text-sm text-white leading-6 text-center lg:text-left">
                            Aqui veras el conteo de todo lo que has registrado.
                        </p>
                    </div>
                    <div className="w-full lg:w-4/5">
                        <div
                            className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between"
                        >
                            <div className="block">
                                <div
                                    className="font-manrope font-bold text-4xl text-yellow-500 mb-3 text-center lg:text-left"
                                >
                                    {paquetes.length}
                                </div>
                                <span className="text-white text-center block lg:text-left">
                                    Total de Paquetes
                                </span>
                            </div>
                            <div className="block">
                                <div
                                    className="font-manrope font-bold text-4xl text-yellow-500 mb-3 text-center lg:text-left"
                                >
                                    {pendientes.length}
                                </div>
                                <span className="text-white text-center block lg:text-left">
                                    Paquetes Nuevos
                                </span>
                            </div>
                            <div className="block">
                                <div
                                    className="font-manrope font-bold text-4xl text-yellow-500 mb-3 text-center lg:text-left"
                                >
                                    {entregados.length}
                                </div>
                                <span className="text-white text-center block lg:text-left">
                                    Paquetes Entregados
                                </span>
                            </div>
                            <div className="block">
                                <div
                                    className="font-manrope font-bold text-4xl text-yellow-500 mb-3 text-center lg:text-left"
                                >
                                    89+
                                </div>
                                <span className="text-white text-center block lg:text-left">
                                    Cantidad de Clientes
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
