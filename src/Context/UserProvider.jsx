
import { Cambiar } from "../hooks/Cambiar"
import { useLoading } from "../hooks/useLoading"
import { UseUser } from "../hooks/UseUser"
import { useValidation } from "../hooks/useValidation"
import { UserContext } from "./UserContext"


export const UserProvider = ({ children }) => {
  const { isLoading } = useLoading()
  const { onChange, onInput, onFind, tracking, rastreo, buscando, filtro, toggleModal, isOpen, abrir, toggleUser } = UseUser()
  const { onInputChange, onSubmit, logout, Editar, seguimiento, email, auth, estado, peso, total, id, emails, usuarios, onUpdateUser, password, paquetes, reload, spiner, onCheck, onActualiza, toggleActualizaModal, open, onChangeModal, cerrar, correo, track, libra, costoso, planes, crearPaquete, onCreate, contrasena, role, plan, usuario, onCreateUser, toggleActualiza, dosabrir, actuaCierra } = useValidation()
  const { Recover, onChangeRecover,cambio,carga,aprueba,passClose,Cambiaso } = Cambiar()


  return (
    <UserContext.Provider value={{
      isLoading, onChange, onInput,
      tracking, rastreo, buscando, seguimiento, cerrar, Editar, email, id, estado, peso, total, emails, password, paquetes, filtro, spiner, isOpen, reload, logout, onFind, toggleModal, onCheck, onActualiza, onChangeModal, usuario, onCreateUser,
      onInputChange, onSubmit, toggleActualizaModal, usuarios, auth, contrasena, role, plan,
      open, correo, track, libra, costoso, planes, crearPaquete, onCreate, abrir, toggleUser, toggleActualiza, dosabrir, actuaCierra, onUpdateUser, Recover, onChangeRecover,cambio,carga,aprueba,passClose,Cambiaso
    }}>
      {children}
    </UserContext.Provider>
  )
}
