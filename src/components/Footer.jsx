import { WhatsappLogo, Phone, EnvelopeSimple, ArrowUp } from '@phosphor-icons/react'
import './Footer.css'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

const services = [
  'Método Construtivo',
  'Cobertura Imperlast',
  'Impermeabilização',
  'Tratamento de Patologias',
]

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <a href="#inicio" onClick={scrollToTop}>
              <img src="/logo.png" alt="Eco Construção" className="footer__logo" />
            </a>
            <p className="footer__brand-text">
              Construção civil com especialização em método construtivo,
              cobertura Imperlast e impermeabilização.
            </p>
            <div className="footer__socials">
              <a
                href="https://wa.me/5571999431211"
                className="footer__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsappLogo size={20} weight="fill" />
              </a>
              <a
                href="tel:+5571999431211"
                className="footer__social"
                aria-label="Telefone"
              >
                <Phone size={20} weight="fill" />
              </a>
              <a
                href="mailto:ecoconstrucaoltda@gmail.com"
                className="footer__social"
                aria-label="Email"
              >
                <EnvelopeSimple size={20} weight="fill" />
              </a>
            </div>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Navegação</h4>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer__link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Serviços</h4>
            <ul className="footer__links">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="footer__link"
                    onClick={(e) => handleNavClick(e, '#servicos')}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Contato</h4>
            <ul className="footer__links">
              <li>
                <a href="tel:+5571999431211" className="footer__link">
                  (71) 99943-1211
                </a>
              </li>
              <li>
                <a href="mailto:ecoconstrucaoltda@gmail.com" className="footer__link">
                  ecoconstrucaoltda@gmail.com
                </a>
              </li>
              <li>
                <span className="footer__link footer__link--static">
                  Lauro de Freitas — Bahia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Eco Construção LTDA. Todos os direitos reservados.
          </p>
          <button className="footer__back-to-top" onClick={scrollToTop} aria-label="Voltar ao topo">
            <ArrowUp size={18} weight="bold" />
          </button>
        </div>
      </div>
    </footer>
  )
}
