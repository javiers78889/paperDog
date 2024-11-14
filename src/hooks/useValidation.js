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
    const navigate = useNavigate()
    const [datos, setDatos] = useState(initialDatos)
    const { email, password } = datos
    const onInputChange = (event) => {
        setDatos({ ...datos, [event.target.name]: event.target.value })

    }
    const onSubmit = async (event) => {
        event.preventDefault();
        const token = await autenticar(datos);
        if (token.length > 0) {

            const decoded = jwtDecode(token)

            sessionStorage.setItem('auth', JSON.stringify(decoded))

            navigate('/profile')
        }


    }
    const logout = () => {

    }
    return {
        onInputChange,
        onSubmit,
        logout,
        email,
        password
    }
}
