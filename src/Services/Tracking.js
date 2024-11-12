import axios from "axios"

const ApiRegister = 'https://paperdogback.onrender.com/tracking'
export const findPaquetes = async (number) => {
    try {
        const registro = await axios.post(ApiRegister, {number})
        return registro.data
    } catch (error) {
        console.error(error)
        
    }
    

    
}