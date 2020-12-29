import { createContext, useState } from "react"

export const AuthContext = createContext()

export default function AuthenticationProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  function handleLogin() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setLoggedIn(true)
    }, 3000)
  }

  return <AuthContext.Provider value={{
    loggedIn,
    handleLogin,
    loading
  }}>
    {children}
  </AuthContext.Provider>
}