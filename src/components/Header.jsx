import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X, Phone, WhatsappLogo } from '@phosphor-icons/react'
import './Header.css'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="header__inner container">
        <a href="#inicio" className="header__logo" onClick={(e) => handleNavClick(e, '#inicio')}>
          <img src="/logo.png" alt="Eco Construção" className="header__logo-img" />
        </a>

        <nav className="header__nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header__nav-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href="tel:+557199943-1211" className="header__phone" aria-label="Ligar para Eco Construção">
            <Phone size={18} weight="bold" />
            <span>(71) 99943-1211</span>
          </a>
          <a
            href="https://wa.me/5571999431211?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            className="btn btn-primary header__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappLogo size={18} weight="bold" />
            Orçamento
          </a>
        </div>

        <button
          className="header__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menu"
          id="mobile-menu-toggle"
        >
          {mobileOpen ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="header__mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          >
            <nav className="header__mobile-nav">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="header__mobile-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, type: 'spring', stiffness: 120, damping: 20 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="header__mobile-actions">
              <a href="tel:+5571999431211" className="btn btn-secondary" style={{ width: '100%' }}>
                <Phone size={18} weight="bold" />
                (71) 99943-1211
              </a>
              <a
                href="https://wa.me/5571999431211?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappLogo size={18} weight="bold" />
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
