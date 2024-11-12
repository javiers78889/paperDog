import { useLoading } from "../hooks/useLoading"
import { UseUser } from "../hooks/UseUser"
import { UserContext } from "./UserContext"


export const UserProvider = ({children}) => {
    const { isLoading } = useLoading()
    const {onChange,onInput, tracking,rastreo,buscando}= UseUser()
  return (
    <UserContext.Provider value={{isLoading, onChange,onInput,tracking,rastreo,buscando}}>
        {children}
    </UserContext.Provider>
  )
}
