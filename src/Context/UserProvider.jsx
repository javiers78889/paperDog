import { useLoading } from "../hooks/useLoading"
import { usePaquetes } from "../hooks/usePaquetes"
import { UseUser } from "../hooks/UseUser"
import { useValidation } from "../hooks/useValidation"
import { UserContext } from "./UserContext"


export const UserProvider = ({ children }) => {
  const { isLoading } = useLoading()
  const { onChange, onInput, tracking, rastreo, buscando } = UseUser()
  const { onInputChange, onSubmit, logout, email, password, paquetes } = useValidation()

  return (
    <UserContext.Provider value={{
      isLoading, onChange, onInput,
      tracking, rastreo, buscando, email, password, paquetes, logout,
      onInputChange, onSubmit
    }}>
      {children}
    </UserContext.Provider>
  )
}
