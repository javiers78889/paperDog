import axios from "axios"
import Swal from "sweetalert2"

const Api = 'https://paperdogback.onrender.com/usuarioexistemail'


export const Valida = async (body) => {
    const storedToken = sessionStorage.getItem('token')
    const headers = {
        'Authorization': `Bearer ${storedToken}`
    }

    try {
        const response = await axios.post(Api, body, { headers })
        return response.data

    } catch (error) {
        Swal.fire({
            title: "Error!",
            text: error,
            icon: "error"
        });
        console.error(error)

    }
}
