import GetUser from "./Components/getUser"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/Github-User-Finder" element={<GetUser />} />
    </Routes>
  )
}

export default App
