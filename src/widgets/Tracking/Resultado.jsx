import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

export const Resultado = () => {
    const { rastreo } = useContext(UserContext)
    const vendedor = rastreo?.shipping_info?.shipper_address || {}
    const receptor = rastreo?.shipping_info?.recipient_address || {}
    const estado = rastreo?.latest_event?.stage || 'Sin estado disponible'  // Se coloca un mensaje predeterminado si `stage` es null o undefined
    const description = rastreo?.latest_event?.description || 'Sin descripción disponible' // Mensaje predeterminado para description

    console.log(receptor)
    return (
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-green-300" />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">Status: <span className='text-green-500'>{ estado}</span></dt>
                <dd className="mt-2 text-base/7 text-gray-200">
                    <span className='font-bold'>Description: <br /></span>{description}
                </dd>
            </div>
            <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-white" />
                </div>
                <dt className="mt-4 text-base font-semibold text-red-500">Dirección de envío</dt>
                <dd className="mt-2 text-base/7 text-white">
                    <span className='font-bold'>City:</span>{vendedor.city ? vendedor.city : ''},<br /> <span className='font-bold'>Pais:</span>{vendedor.country ? vendedor.country : ''}<br />  <span className='font-bold'> Codigo Postal:</span>{vendedor.postal_code ? vendedor.postal_code : ''}<br />  <span className='font-bold'>Estado:</span>{vendedor.state ? vendedor.state : ''}
                </dd>
            </div>
            <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-white" />
                </div>
                <dt className="mt-4 text-base font-semibold text-yellow-500">Dirección de Entrega</dt>
                <dd className="mt-2 text-base/7 text-white">
                    <span className='font-bold'>City:</span>{receptor.city ? receptor.city : ''},<br /> <span className='font-bold'>Pais:</span>{receptor.country ? receptor.country : ''}   <br /><span className='font-bold'>Codigo Postal:</span>{receptor.postal_code ? receptor.postal_code : ''} <br /> <span className='font-bold'>Estado:</span>{receptor.state ? receptor.state : ''}
                </dd>
            </div>
        </dl>
    )
}
