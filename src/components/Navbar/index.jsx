import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    // Close mobile menu after clicking a link
    setIsOpen(false)
  }

  return (
    <nav
      className={`w-full h-[3.5rem] fixed z-10 top-0 font-title px-6 py-2 transition-colors duration-300 ${
        isScrolled ? 'bg-night bg-opacity-90' : 'bg-night'
      } flex justify-between items-center`}
    >
      {/* Logo */}
      <img
        className="w-20 cursor-pointer hover:scale-110"
        src="../../../public/Trick-or-Treat-Fest-logo.png"
        alt="logo de Trick or Treat Fest"
        onClick={() => navigate('/')}
      />

      {/* Hamburger / Close button (mobile only) */}
      <div className="md:hidden cursor-pointer p-1 rounded hover:bg-night/20">
        {isOpen ? (
          <FaTimes className="text-pumpkin text-2xl" onClick={() => setIsOpen(false)} />
        ) : (
          <FaBars className="text-pumpkin text-2xl" onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Menu links */}
      <ul
        className={`flex items-center text-pumpkin text-base gap-4 ${
          isOpen ? 'block md:hidden' : 'hidden md:flex'
        }`}
      >
        <li
          className="cursor-pointer hover:scale-105 px-2 py-1"
          onClick={() => {
            navigate('/')
            setIsOpen(false)
          }}
        >
          Inicio
        </li>
        <li
          className="cursor-pointer hover:scale-105 px-2 py-1"
          onClick={() => {
            handleNavigation('tickets')
          }}
        >
          Tickets
        </li>
        <li
          className="cursor-pointer hover:scale-105 px-2 py-1"
          onClick={() => {
            handleNavigation('artists')
          }}
        >
          Artistas
        </li>
        <li
          className="cursor-pointer hover:scale-105 px-2 py-1"
          onClick={() => {
            handleNavigation('gallery')}
          }
        >
          Galería
        </li>
        <li
          className="cursor-pointer hover:scale-105 px-2 py-1"
          onClick={() => {
            handleNavigation('testimonials')
            setIsOpen(false)
          }}
        >
          Testimonios
        </li>
        <li>
          <button
            className="bg-pumpkin text-liliac-dark font-bold cursor-pointer rounded-md px-3 py-1 hover:scale-105 transition duration-200"
            onClick={() => {
              navigate('/buy-tickets')
              setIsOpen(false)
            }}
          >
            Compra tus tickets
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar