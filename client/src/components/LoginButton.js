import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return(
    !isAuthenticated && (
      <button size="sm" variant="primary" onClick={() => loginWithRedirect()}>
        Sign In
      </button>

    )
  )

}

export default LoginButton;