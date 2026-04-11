import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import LandingPage from "./pages/LandingPage"
import Signup from "./pages/SignUp"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App