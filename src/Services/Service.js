import axios from "axios"
import Swal from "sweetalert2"

const Api = 'https://paperdogback.onrender.com/login'


export const autenticar = async (body) => {
    try {
        const response = await axios.post(Api, body)

        if (response.data.token) {
          
           
            return response.data.token;
        }

        else {
            Swal.fire({
                title: "Lo sentimos!",
                text: response.data.mensaje,
                icon: "error"
            });

            return response
            
        }

    } catch (error) {

    }
}