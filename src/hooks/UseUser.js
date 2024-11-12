import { useState } from "react"
import { findPaquetes } from "../Services/Tracking"
import Swal from "sweetalert2"

const initTracking = ''
export const UseUser = () => {
    const [tracking, setTracking] = useState(initTracking)
    const [buscando, setBuscando] = useState(false)
    const [rastreo, setRastreo] = useState(initTracking)

    const onChange = (event) => {
        console.log(event.target.value)
        setTracking(
            event.target.value
        );
    }
    const onInput = async () => {
        setBuscando(true)
        setRastreo(initTracking)
        try {


            const encontrado = await findPaquetes(tracking)
            const tracking_info = encontrado.data.accepted[0].track_info || {}
    
            if (Object.keys(encontrado).length > 0) {

                setRastreo(tracking_info)
                setBuscando(false)
            }
            else {
                setBuscando(false)
                Swal.fire({
                    title: "Lo sentimos!",
                    text: "Paquete no Encontrado...",
                    icon: "error"
                });
            }
        } catch (error) {

        } finally {
            // Finalmente, después de terminar la búsqueda, se actualiza el estado
            setBuscando(false);
        }

    }
    return {
        onChange,
        onInput,
        tracking,
        rastreo,
        buscando
    }
}
