import axios from "axios"

const Api = 'https://paperdogback-nl6v.onrender.com/usuarioexist'

const Apid = 'https://paperdogback-nl6v.onrender.com/users'

//verifica si el paquete existe
export const EncontrarUsuario = async (id) => {
    const storedToken = sessionStorage.getItem('token')
    const headers = {
        'Authorization': `Bearer ${storedToken}`
    }
    try {
        const response = await axios.post(Api, id, { headers })
        return response.data

    } catch (error) {
        console.error(error)

    }
}
export const actualizameusuario = async (id) => {
    
   
    try {
        const response = await axios.put(Apid, id)

        return response

    } catch (error) {
        console.error(error)

    }
}