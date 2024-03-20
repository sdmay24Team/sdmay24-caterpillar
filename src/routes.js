import LoginSignup from "./Components/LoginSignUp"
import Dashboard from "./Components/Dashboard"
import ViewRecords from "./Components/ViewRecords"
import CreateAccount from "./Components/CreateAccount"
import Settings from "./Components/Settings"
import ImportRecords from "./Components/ImportRecords/ImportRecords"
import Dish from "./Components/CreateRecords/Dish"

const routes = [
  { path: "/", element: <LoginSignup />, isProtected: false },
  { path: "/dash", element: <Dashboard />, isProtected: true },
  { path: "/setup", element: <CreateAccount />, isProtected: true },
  { path: "/settings", element: <Settings />, isProtected: true },
  { path: "/view", element: <ViewRecords />, isProtected: true },
  { path: "/import", element: <ImportRecords />, isProtected: true },
  { path: "/dish", element: <Dish />, isProtected: true },
]

export default routes
