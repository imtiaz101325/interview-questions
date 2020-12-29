import { useContext } from "react"

// Context
import { AuthContext } from '../../context/Authentication'

export default function PublicUI() {
  const { handleLogin } = useContext(AuthContext)

  return <div>
    <h1>Homepage</h1>
    <button onClick={handleLogin}>Sign in</button>
  </div>
}