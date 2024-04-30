import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Sing from './Pages/Sing'
import Login from './Pages/Login'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Header from './Components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
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
