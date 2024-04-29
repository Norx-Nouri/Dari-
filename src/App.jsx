import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Sing from './Pages/Sing'
import Login from './Pages/Login'
import About from './Pages/About'
import Profile from './Pages/Profile'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Sing-Up" element={<Sing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About-Us" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
