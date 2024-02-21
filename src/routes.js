import LoginSignup from "./Components/LoginSignUp"
import Dashboard from "./Components/Dashboard"
import ViewRecords from "./Components/ViewRecords"
import CreateAccount from "./Components/CreateAccount"
import Settings from "./Components/Settings"
import { createRoutesFromElements } from "react-router-dom"
import ImportRecords from "./Components/ImportRecords/ImportRecords"

const routes = [
  { path: "/", element: <LoginSignup /> },
  { path: "/dash", element: <Dashboard /> },
  { path: "/setup", element: <CreateAccount />},
  { path: "/settings", element: <Settings />},
  { path: "/view", element: <ViewRecords /> },
  { path: "/import", element: <ImportRecords />},
  { path: "/setup", element: <CreateAccount />}
]

export default routes
