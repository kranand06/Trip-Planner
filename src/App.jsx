import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Header from "./Components/CopyHeader"

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
