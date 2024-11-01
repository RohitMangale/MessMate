import { Outlet } from 'react-router-dom'
import Navbar from './componenets/Navbar'
import Footer from './componenets/Footer'

const Layout = () => {
  return (
    <main className='App'>
        <Navbar/>
        <Outlet />
        <Footer/>
    </main>
  )
}

export default Layout