import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { autenticar } from "../Services/Service";
import { jwtDecode } from "jwt-decode";
import { Edicion, Entregar } from "../Services/Paquetes";
import Swal from "sweetalert2";
import { ActualizarPaquete } from "../Services/ActualizarPaquetes";

const initialDatos = {
    "email": '',
    "password": ''
}
const initialPaquetes = JSON.parse(sessionStorage.getItem('paquetes')) || []


export const useValidation = () => {
    const navigate = useNavigate()
    const [datos, setDatos] = useState(initialDatos)
    const [auth, setAuth] = useState([])
    const [update, setUpdate] = useState([])
    const [tokeado, setTokeado] = useState('')
    const { id, tracking: seguimiento, email, estado, peso, total } = update
    const [tupla, setTupla] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const [paquetes, setPaquetes] = useState(initialPaquetes)
    const [actualizar, setActualizar] = useState([])
    const [valido, setValido] = useState(true)
    const [spiner, setSpiner] = useState(true)
    const [reload, setReload] = useState(false);
    const [open, setOpen] = useState(false);
    const { email: emails, password } = datos

    const onInputChange = (event) => {
        setDatos({ ...datos, [event.target.name]: event.target.value })

    }
    const data = async () => {
        if (valido) {

            const decoded = auth
            if (decoded && Object.keys(decoded).length > 0) {
                setPaquetes(tupla.paquetes)
                setUsuarios(tupla.usuarios)
                Swal.fire({
                    title: "Acceso Aprobado!",
                    text: 'Bienvenido',
                    icon: "success"
                });

                navigate('/profile')
            }

        } else {
            console.log('entre')
            const token = await autenticar(datos);
            if (token.token.length > 0) {

                setPaquetes(token.paquetes)
                setUsuarios(token.usuarios)

            }
            
            Swal.fire({
                title: "Hecho!",
                text: 'Perfecto',
                icon: "success"
            });
            setValido(true)

        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setSpiner(true)
        const token = await autenticar(datos);
        if (token.token.length > 0) {

            setTupla(token)
            const decoded = jwtDecode(token.token)

            setAuth(decoded)
        }
        setReload(!reload)




    }

    const logout = () => {
        setValido(true)
        sessionStorage.removeItem('token')


        navigate('/login')

    }
    const onCheck = (id) => {
        setActualizar(id)

    }
    const toggleActualizaModal = async () => {
        const obj = {
            "id": actualizar
        }
        const response = await ActualizarPaquete(obj)
        if (response) {
            setUpdate(response)
            setOpen(!open);
        }

    };
    const cerrar = () => {
        setOpen(!open);
    }

    const onChangeModal = (event) => {
        setUpdate({ ...update, [event.target.name]: event.target.value })

    }
    const onActualiza = async () => {
        setValido(false)
        const ob = {
            "id": actualizar,
            "estado": "Entregado"
        }
        const respuesta = await Entregar(ob)

        setReload(!reload);
    }

    const Editar = async (event) => {
        event.preventDefault()
        const response = await Edicion(update)
        if (response) {
            setReload(!reload)
            setOpen(!open)
        }

    }
    useEffect(() => {
        data();
        setSpiner(!spiner)

    }, [reload]);
    return {
        onInputChange,
        onSubmit,
        logout,
        data,
        onCheck,
        onActualiza,
        reload,
        emails,
        password,
        paquetes,
        spiner, toggleActualizaModal, open,
        seguimiento, email, estado, peso, total, onChangeModal, cerrar, id, Editar, usuarios, auth, tokeado
    }
}
