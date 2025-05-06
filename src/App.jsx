import { Route, Routes } from "react-router"
import Dashboard from "./Dashboard"
import UserDetails from "./Pages/UserDetails"

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Dashboard />}/>
      <Route path="/:userId" element={<UserDetails />} />
    </Routes>
    </>
  )
}

export default App
