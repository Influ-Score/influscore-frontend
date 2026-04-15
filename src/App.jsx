import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import LandingPage from "./pages/LandingPage"
import Dashboard from "./pages/Dashboard"
import Inbox from "./pages/Inbox"
import Settings from "./pages/Settings"
import Layout from "./layouts/layout"
import Platforms from "./pages/Platforms"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<Layout />}>
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App