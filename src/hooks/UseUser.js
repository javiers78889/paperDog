import { useEffect, useState } from "react"
import { findPaquetes } from "../Services/Tracking"
import Swal from "sweetalert2"


const initTracking = ''
export const UseUser = () => {
    const [tracking, setTracking] = useState(initTracking)
    const [buscando, setBuscando] = useState(true)
    const [rastreo, setRastreo] = useState(initTracking)
    const [cargando, setCargando] = useState(true)
    const [filtro, setFiltro] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [abrir, setAbrir] = useState(false)
 

    const onChange = (event) => {
        console.log(event.target.value)
        setTracking(
            event.target.value
        );
    }
    const onFind = (event) => {

        setFiltro(event.target.value)

    }
    const toggleModal = () => {
        setIsOpen(!isOpen);

    };
    const toggleUser = () => {
        setAbrir(!abrir)

    };
 

    const onInput = async () => {
        try {
            setCargando(!cargando)
            setRastreo(initTracking)



            const encontrado = await findPaquetes(tracking)
            const tracking_info = encontrado.data.accepted[0].track_info || {}

            if (Object.keys(encontrado).length > 0) {

                setRastreo(tracking_info)
                setCargando(!cargando)
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
            console.error(error)

        } finally {
            // Finalmente, después de terminar la búsqueda, se actualiza el estado
            setBuscando(false);
        }



    }
    useEffect(() => {
        setBuscando(!buscando)

    }, [cargando])
    return {
        onChange,
        onInput,
        onFind,
        toggleModal,
        tracking,
        rastreo,
        buscando,
        filtro,
        isOpen,
        toggleUser,
        abrir

    }
}
