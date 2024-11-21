import { useState } from "react"
import { Valida } from "../Services/Actualizar"
import { actualizameusuario } from "../Services/ActualizarUsuario"
import Swal from "sweetalert2"

export const Cambiar = () => {
    const [cambio, setCambio] = useState([])
    const [carga, setCarga] = useState(false)
    const [aprueba, setAprueba] = useState(false)
    const [id, setId] = useState([])

    const onChangeRecover = (event) => {
        setCambio({ ...cambio, [event.target.name]: event.target.value })
        console.log(event.target.name, event.target.value)



    }

    const Recover = async (event) => {
        event.preventDefault()
        setCarga(!carga)
        const response = await Valida(cambio)

        if (response) {
            setAprueba(!aprueba)
            setCarga(!carga)
            setCambio(response.exist)
            setId(response.exist.id)
        }

    }
    const passClose = () => {
        setAprueba(!aprueba)
    }

    const Cambiaso = async (event) => {
        event.preventDefault()
        const { email, usuario, password, role, plan } = cambio
        const obj = {
            "id": id,
            "email": email,
            "usuario": usuario,
            "password": password,
            "role": role,
            "plan": plan
        }
        console.log(obj)
        const response = await actualizameusuario(obj)
        if (response) {
            console.log(response)
            Swal.fire({
                title: "Listo!",
                text: 'Actualizado',
                icon: "success"
            });
            setAprueba(!aprueba)
        }
    }

    return {
        Recover,
        onChangeRecover, cambio, carga, aprueba, passClose, Cambiaso

    }
}
