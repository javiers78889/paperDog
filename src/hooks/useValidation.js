import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { autenticar } from "../Services/Service";
import { jwtDecode } from "jwt-decode";
import { Edicion, Entregar, findPaquetes, userPaquetes } from "../Services/Paquetes";
import Swal from "sweetalert2";
import { ActualizarPaquete } from "../Services/ActualizarPaquetes";
import { EncontrarUsuarios } from "../Services/User";

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
    const { id, tracking: seguimiento, email, estado, peso, total } = update
    const [usuarios, setUsuarios] = useState([])
    const [paquetes, setPaquetes] = useState(initialPaquetes)
    const [actualizar, setActualizar] = useState([])
    const [spiner, setSpiner] = useState(true)
    const [reload, setReload] = useState(false);
    const [open, setOpen] = useState(false);
    const { email: emails, password } = datos

    const onInputChange = (event) => {
        setDatos({ ...datos, [event.target.name]: event.target.value })

    }
    const data = async () => {


        const decoded = auth
        if (decoded && Object.keys(decoded).length > 0) {
          
            if (decoded.role === 'admin') {
                console.log('entrooo')
                const datito = await findPaquetes()
                if (datito &&  Object.keys(datito).length > 0) {

                    setPaquetes(datito)
                    const usuario = await EncontrarUsuarios()
                    if (usuario.length > 0) {

                        setUsuarios(usuario)
                        Swal.fire({
                            title: "Acceso Aprobado!",
                            text: 'Bienvenido',
                            icon: "success"
                        });
                        setSpiner(false)
                        navigate('/profile')
                    }

                }

            } else {
                const obj = {
                    "email": decoded.email
                }
                const datito = await userPaquetes(obj)
                if (datito &&  Object.keys(datito).length > 0) {
                    setPaquetes(datito)
                    const usuario = await EncontrarUsuarios()
                    if (usuario &&  Object.keys(usuario).length > 0) {
                        console.log('usuario')
                        setUsuarios(usuario)
                        Swal.fire({
                            title: "Acceso Aprobado!",
                            text: 'Bienvenido',
                            icon: "success"
                        });
                        setSpiner(false)
                        navigate('/profile')
                    }
                }


            }
        }
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        setSpiner(true)
        const token = await autenticar(datos);

        if (token.length > 0) {
            sessionStorage.setItem('token', token)

            const decoded = jwtDecode(token)

            setAuth(decoded)



            setReload(!reload)
        }
        else {
            setSpiner(false)
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
    const toggleActualizaModal = async () => {
        const obj = {
            "id": actualizar
        }
        const response = await ActualizarPaquete(obj)
        if (response) {
            console.log(response)
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
        seguimiento, email, estado, peso, total, onChangeModal, cerrar, id, Editar, usuarios, auth
    }
}
