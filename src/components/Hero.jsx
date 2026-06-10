import { motion } from 'framer-motion'
import { ArrowRight, WhatsappLogo, ShieldCheck, Buildings, Drop } from '@phosphor-icons/react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg">
        <div className="hero__bg-overlay" />
        <img
          src="/images/hero-construction.png"
          alt="Construção civil com cobertura Imperlast"
          className="hero__bg-img"
        />
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 20 }}
          >
            <ShieldCheck size={16} weight="fill" />
            Excelência em Construção Civil
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, type: 'spring', stiffness: 80, damping: 20 }}
          >
            Construímos com{' '}
            <span className="hero__title-accent">qualidade técnica</span>{' '}
            e compromisso com a durabilidade
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 80, damping: 20 }}
          >
            Especialistas em método construtivo,
            impermeabilização e tratamento de patologias construtivas com base
            em critérios técnicos e normas vigentes. Realizamos serviços de cobertura utilizando produtos Imperlast.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, type: 'spring', stiffness: 80, damping: 20 }}
          >
            <a
              href="https://wa.me/5571999431211?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              className="btn btn-whatsapp btn--lg"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-cta"
            >
              <WhatsappLogo size={20} weight="bold" />
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="btn btn-secondary btn--lg hero__btn-services"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              id="hero-services-cta"
            >
              Nossos Serviços
              <ArrowRight size={18} weight="bold" />
            </a>
          </motion.div>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, type: 'spring', stiffness: 80, damping: 20 }}
          >
            <div className="hero__stat">
              <Buildings size={22} weight="duotone" />
              <div>
                <span className="hero__stat-number">150+</span>
                <span className="hero__stat-label">Projetos Realizados</span>
              </div>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <Drop size={22} weight="duotone" />
              <div>
                <span className="hero__stat-number">100%</span>
                <span className="hero__stat-label">Estanqueidade Garantida</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <motion.div
          className="hero__scroll-dot"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </div>
    </section>
  )
}
