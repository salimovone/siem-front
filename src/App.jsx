// import ResponsiveDrawer from "./Router/Layout/ResponsiveDrawer"
import AuthProvider from "./context/AuthProvider"
import Router from "./Router/Router"

function App() {

  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

export default App
