import axios from "axios"
import Swal from "sweetalert2"

const Api = 'https://paperdogback-nl6v.onrender.com/login'


export const autenticar = async (body) => {
    try {
        const response = await axios.post(Api, body)

        if (response?.data?.obj?.token) {
            const toke = response.data.obj.token
            console.log(toke)

            sessionStorage.setItem('token', toke)
            return response.data.obj;
        }

        else {
            Swal.fire({
                title: "Lo sentimos!",
                text: response.data.mensaje,
                icon: "error"
            });

            return;

        }

    } catch (error) {
        console.error(error)

    }
}