import { useEffect, useState } from "react"
import { CreatePackage } from "../Services/Paquetes"
import Swal from "sweetalert2"
import { useValidation } from "./useValidation"
const initial = {
    "email": '',
    "correo": '',
    "track": '',
    "peso": '',
    "tarifa": '',
    "plan": ''
}
export const useCrear = () => {
    const [capturar, setCapturar] = useState([])
    const { data } = useValidation()
    const { email: correo, track, peso: libra, tarifa: costoso, plan: planes } = capturar
    const [cambio, setcambio] = useState(true)

    const onCreate = (event) => {


        setCapturar({ ...capturar, [event.target.name]: event.target.value })

    }
    const crearPaquete = async (event) => {
        event.preventDefault()

        const { tarifa, peso, tracking, email, plan } = capturar


        const pesado = Number(peso)
        const estado = 'pendiente'
        const total = parseFloat((Number(tarifa) * peso).toFixed(1));

        // Objeto a enviar
        const datos = {
            tracking: tracking,    // Este es un ejemplo
            email: email,
            plan: plan,
            peso: pesado,
            total: total,              // El total ahora es un número flotante con un decimal
            estado: estado
        };

        const response = await CreatePackage(datos)
        if (response) {
            Swal.fire({
                title: "Ok!",
                text: response.mensaje,
                icon: "error"
            });

        }



    }

    useEffect(() => {
        data()

    }, [cambio])
    return {
        crearPaquete,
        onCreate,
        correo,
        track,
        libra,
        costoso,
        planes

    }
}
