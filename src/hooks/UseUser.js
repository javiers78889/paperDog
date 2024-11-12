import { useState } from "react"
import { findPaquetes } from "../Services/Tracking"

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
        const encontrado = await findPaquetes(tracking)
        if (encontrado) {

            setRastreo(encontrado.data.accepted[0].track_info)
            setBuscando(false)
        }
        else {
            setBuscando(false)
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
