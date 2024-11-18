import axios from "axios"

const Api = 'https://paperdogback.onrender.com/users'
const storedToken = sessionStorage.getItem('token')
const headers = {
    'Authorization': `Bearer ${storedToken}`
}

export const EncontrarUsuarios = async () => {
    try {
        const response = await axios.get(Api, { headers })
        if (response) {
            
            return response.data
        }
    } catch (error) {
        console.error(error)

    }

}