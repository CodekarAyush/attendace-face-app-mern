import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home"
import EmployeeForm from "./pages/EmployeeForm"

const App = () => {
  return (
<>

<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/employee-form" element={<EmployeeForm  />}/>
</Routes>
</BrowserRouter>
</>

  )
}

export default App