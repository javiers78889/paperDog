import axios from "axios"

const Api = 'https://paperdogback.onrender.com/paquetes'
const ApUser = 'https://paperdogback.onrender.com/userpaquetes'
const storedToken = sessionStorage.getItem('token')
const headers = {
    'Authorization': `Bearer ${storedToken}`
}
export const findPaquetes = async () => {
    try {

        const response = await axios.get(Api, { headers })

        return response.data

    } catch (error) {

        console.error(error)

    }
}
export const userPaquetes = async (body) => {

    try {

        const response = await axios.post(ApUser, body, { headers })

        return response.data

    } catch (error) {

        console.error(error)

    }
}