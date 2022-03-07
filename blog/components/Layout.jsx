import HeaderCoppy from './Navbar'
import Footer from '../components/Footer'
import NavbarCoppy from './Navbar/NavbarCoppy'

export default function Layout({ children }) {
  return (
    <>
      <NavbarCoppy />
      <main>{children}</main>
      <Footer />
    </>
  )
}
