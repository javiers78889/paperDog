
import { useCrear } from "../hooks/useCrear"
import { useLoading } from "../hooks/useLoading"
import { UseUser } from "../hooks/UseUser"
import { useValidation } from "../hooks/useValidation"
import { UserContext } from "./UserContext"


export const UserProvider = ({ children }) => {
  const { isLoading } = useLoading()
  const { onChange, onInput, onFind, tracking, rastreo, buscando, filtro, toggleModal, isOpen } = UseUser()
  const { onInputChange, onSubmit, logout, Editar, seguimiento, email, auth, estado, peso, total, id, emails, usuarios, password, paquetes, reload, spiner, onCheck, onActualiza, toggleActualizaModal, open, onChangeModal, cerrar } = useValidation()
  const { correo, track, libra, costoso, planes, crearPaquete, onCreate } = useCrear()


  return (
    <UserContext.Provider value={{
      isLoading, onChange, onInput,
      tracking, rastreo, buscando, seguimiento, cerrar, Editar, email, id, estado, peso, total, emails, password, paquetes, filtro, spiner, isOpen, reload, logout, onFind, toggleModal, onCheck, onActualiza, onChangeModal,
      onInputChange, onSubmit, toggleActualizaModal, usuarios, auth,
      open, correo, track, libra, costoso, planes, crearPaquete, onCreate
    }}>
      {children}
    </UserContext.Provider>
  )
}
