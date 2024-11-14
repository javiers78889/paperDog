import { useReducer, useState } from "react";
import { AuthReducer } from "../Reducer/AuthReducer";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { autenticar } from "../Services/Service";
import { jwtDecode } from "jwt-decode";

const initialDatos = {
    "email": '',
    "password": ''
}


export const useValidation = () => {

    const [datos, setDatos] = useState(initialDatos)
    const { email, password } = datos
    const onInputChange = (event) => {
        console.log(event.target.value)
        setDatos({ ...datos, [event.target.name]: event.target.value })

    }
    const onSubmit = async (event) => {
        event.preventDefault();
        const token = await autenticar(datos);
        const decoded= jwtDecode(token)

        console.log(decoded)

   


   






    }
    const logout = () => {
        dispatch({
            type: 'logout',
            payload: storedUser.email
        })
    }
    return {
        onInputChange,
        onSubmit,
        logout,
        email,
        password
    }
}
