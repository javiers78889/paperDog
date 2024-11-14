import { useLoading } from "../hooks/useLoading"
import { UseUser } from "../hooks/UseUser"
import { useValidation } from "../hooks/useValidation"
import { UserContext } from "./UserContext"


export const UserProvider = ({ children }) => {
  const { isLoading } = useLoading()
  const { onChange, onInput, tracking, rastreo, buscando } = UseUser()
  const { onInputChange, onSubmit,logout,email,password} = useValidation()
  return (
    <UserContext.Provider value={{ isLoading, onChange, onInput,
    tracking, rastreo, buscando,email,password,
    onInputChange, onSubmit }}>
      {children}
    </UserContext.Provider>
  )
}
