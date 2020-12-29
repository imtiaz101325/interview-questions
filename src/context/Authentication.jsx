import { createContext, useState } from "react"

export const AuthContext = createContext()

export default function AuthenticationProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false)

  function handleLogin() {
    setTimeout(() => setLoggedIn(true), 3000)
  }

  return <AuthContext.Provider value={{
    loggedIn,
    handleLogin
  }}>
    {children}
  </AuthContext.Provider>
}