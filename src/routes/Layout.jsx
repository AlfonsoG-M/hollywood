import { Outlet } from 'react-router'
import Footer from '../components/layout/footer/Footer'
import NavbarContainer from '../components/layout/navbar/NavBarContainer'
NavbarContainer
const Layout = () => {
 
  return (
    <div className='App'>
      <NavbarContainer/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout