
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import NotFound from './Pages/NotFound'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Orders from './Pages/Orders'
import CheckOut from './Pages/CheckOut'

function App() {

  return (
    <Routes>
  
      <Route path="/" element={<Layout />} >
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
