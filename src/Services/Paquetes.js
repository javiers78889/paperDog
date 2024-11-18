import axios from "axios"
import Swal from "sweetalert2"

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

//filtra dependiendo del usuario logueado
export const userPaquetes = async (body) => {

    try {

        const response = await axios.post(ApUser, body, { headers })

        return response.data

    } catch (error) {

        console.error(error)

    }
}

//es decir ENTREGADO

export const Entregar = async ({ id, estado }) => {
    console.log(id)
    const body = {
        id, estado
    }
    console.log(body)
    try {
        const response = await axios.put(Api, body, { headers })
        if (response) {
            Swal.fire({
                title: "Actualizado!",
                text: response.data.mensaje,
                icon: "success"
            });
            console.log(response)

            return response.data.mensaje
        }
    } catch (error) {
        Swal.fire({
            title: "Lo sentimos!",
            text: error,
            icon: "error"
        });

    }

}
//Actualizar estado ; 

export const Edicion = async (body) => {
    try {
        const response = await axios.put(Api, body, { headers })
        if (response) {
            Swal.fire({
                title: "Actualizado!",
                text: response.data.mensaje,
                icon: "success"
            });
            return response.data.mensaje
        }
    } catch (error) {
        Swal.fire({
            title: "Lo sentimos!",
            text: error,
            icon: "error"
        });

    }
}