import React, {useState, useEffect} from 'react'

// Import components
import Navbar from './../Navbar/Navbar';
import NavMobile from './../NavbarMobile/NavbarMobile'
import Socials from './../Socials/Socials'
const Header = () => {
const [bg, setBg] = useState(false)
useEffect(()=> {
window.addEventListener('scroll', ()=> {
return window.scrollY > 50 ? setBg(true) : setBg(false)
})
})
return (
<header className={`${bg ? 'bg-gradient-to-r from-cyan-500 to-blue-500 h-20' : 'h-24' } flex items-center fixed top-0 w-full text-white z-10
    transition-all duration-300`}>
    <div className='container mx-auto h-full flex items-center justify-between'>
        {/* Logo */}
        <a href="/">
            {/* <img src={Logo} alt="Logo" /> */}
            <h1 className="site_logo">Bakhriddinov Samandar</h1>
        </a>
        {/* Navbar */}
        <div className="hidden lg:block">
            <Navbar />
        </div>
        {/* socials */}
        <div className="hidden lg:block">
            <Socials />
        </div>
           {/* nav mobile */}
           <div className="lg:hidden">
            <NavMobile />
        </div>
    </div>
</header>
)
}

export default Header