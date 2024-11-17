import { useEffect, useReducer, useState } from "react";
import { AuthReducer } from "../Reducer/AuthReducer";
import { BrowserRouter, redirect, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { autenticar } from "../Services/Service";
import { jwtDecode } from "jwt-decode";
import { Entregar, findPaquetes, userPaquetes } from "../Services/Paquetes";
import Swal from "sweetalert2";

const initialDatos = {
    "email": '',
    "password": ''
}
const initialPaquetes = JSON.parse(sessionStorage.getItem('paquetes')) || []


export const useValidation = () => {
    const navigate = useNavigate()
    const [datos, setDatos] = useState(initialDatos)
    const [paquetes, setPaquetes] = useState(initialPaquetes)
    const [actualizar, setActualizar] = useState([])
    const [spiner, setSpiner] = useState(false)
    const [reload, setReload] = useState(false);
    const { email, password } = datos
    const onInputChange = (event) => {
        setDatos({ ...datos, [event.target.name]: event.target.value })

    }
    const data = async () => {
        const decoded = JSON.parse(sessionStorage.getItem('auth'))

        if (decoded.role === 'admin') {
            const datito = await findPaquetes()

            setPaquetes(datito)
        } else {
            const obj = {
                "email": decoded.email
            }
            const datito = await userPaquetes(obj)

            setPaquetes(datito)
        }
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        setSpiner(true)
        const token = await autenticar(datos);

        if (token.length > 0) {

            const decoded = jwtDecode(token)

            sessionStorage.setItem('auth', JSON.stringify(decoded))
            sessionStorage.setItem('token', token)


            setReload(!reload)






            navigate('/profile')
        }


    }

    const logout = () => {
        sessionStorage.removeItem('auth')
        sessionStorage.removeItem('token')

        navigate('/login')

    }
    const onCheck = (id) => {
        setActualizar(id)

    }
    const onActualiza = async () => {
        console.log(actualizar)
        const ob = {
            "id": actualizar,
            "estado": "Entregado"
        }
        const respuesta = await Entregar(ob)

        if (respuesta) {
            Swal.fire({
                title: "Estado",
                text: respuesta.data.mensaje,
                icon: "success"
            });
            setReload(!reload);
        }
    }
    useEffect(() => {
        data();
        setSpiner(false)
    }, [reload]);
    return {
        onInputChange,
        onSubmit,
        logout,
        data,
        onCheck,
        onActualiza,
        reload,
        email,
        password,
        paquetes,
        spiner
    }
}
