import axios from "axios"

const ApiRegister = 'https://api.17track.net/track/v2.2/register'
const ApiIngfo = 'https://api.17track.net/track/v2.2/gettrackinfo'
const headers = {
    'Content-Type': 'application/json',  // El tipo de contenido
    '17token': 'F3B35D8A09F7C663D24E364686052422', // Tu token
   
};
export const findPaquetes = async (number) => {
    const registro = await axios.post(ApiRegister,{ headers }, { number }, )
    if (registro) {

        const response = await axios.post(ApiIngfo, number)

        return response.data
    }
    else{
        const response = await axios.post(ApiIngfo, number)

        return response.data

    }
}