import { useState } from "react"
import { findPaquetes } from "../Services/Tracking"

const initTracking = ''
export const UseUser = () => {
    const [tracking, setTracking] = useState(initTracking)
    const [rastreo, setRastreo] = useState(initTracking)
    const onChange = (event) => {
        console.log(event.target.value)
        setTracking(
            event.target.value
        );
    }
    const onInput = async () => {
        const encontrado = await findPaquetes(tracking)
        setRastreo(rastreo)
        console.log('input')
        console.log(encontrado)
    }
    return {
        onChange,
        onInput,
        tracking,
        rastreo
    }
}
