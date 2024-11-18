import axios from "axios"

const Api = 'https://paperdogback.onrender.com/paquetesexist'
const storedToken = sessionStorage.getItem('token')
const headers = {
    'Authorization': `Bearer ${storedToken}`
}
export const ActualizarPaquete = async (id) => {
    try {
        console.log(id)
        const response = await axios.post(Api, id, { headers })
        return response.data

    } catch (error) {
        console.error(error)

    }
}