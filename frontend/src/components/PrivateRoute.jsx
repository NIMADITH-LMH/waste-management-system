import { Navigate } from 'react-router-dom'
import useAuthStore from '../store/authStore'

const PrivateRoute = ({ children, roles = [] }) => {
  const { isAuthenticated, user } = useAuthStore()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (roles.length > 0 && !roles.includes(user?.role)) {
    return <Navigate to="/" replace />
  }

  return children
}

export default PrivateRoute
