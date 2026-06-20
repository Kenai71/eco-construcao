import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HardHat, Warehouse, Drop, Wall, ArrowRight } from '@phosphor-icons/react'
import './Services.css'

const services = [
  {
    icon: Drop,
    title: 'Impermeabilização',
    description:
      'Sistemas completos de impermeabilização para lajes, piscinas, reservatórios e áreas molhadas, combatendo infiltrações.',
    features: ['Lajes e coberturas', 'Piscinas e reservatórios', 'Áreas molhadas'],
    image: '/images/impermeabilizacao.png',
  },
  {
    icon: HardHat,
    title: 'Método Construtivo E-Bloco',
    description:
      'Execução de obras civis com metodologia técnica, garantindo eficiência e qualidade em todas as etapas do processo construtivo.',
    features: ['economia de até 45%', '⁠desperdício quase zero', 'velocidade de execução'],
    image: '/images/construcao.png',
  },
  {
    icon: Warehouse,
    title: 'Telha Sanduíche',
    description:
      'Instalação e manutenção de telhas com sistema sanduíche, garantindo isolamento térmico e acústico superiores.',
    features: ['Isolamento térmico', 'Acústica otimizada', 'Alta durabilidade'],
    image: '/images/telha-sanduiche.jpeg', 
  },
  {
    icon: Wall,
    title: 'Tratamento de Patologias',
    description:
      'Diagnóstico e tratamento de patologias construtivas relacionadas à infiltração e umidade, restaurando a integridade estrutural.',
    features: ['Diagnóstico técnico', 'Correção de infiltrações', 'Restauração estrutural'],
    image: '/images/piscina.png',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="services section" id="servicos" ref={ref}>
      <div className="container">
        <div className="services__header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            Nossos Serviços
          </motion.span>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, type: 'spring', stiffness: 80, damping: 20 }}
          >
            Soluções completas para sua obra
          </motion.h2>

          <motion.p
            className="section-description"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 80, damping: 20 }}
          >
            Da fundação ao acabamento, oferecemos serviços integrados com padrão
            técnico de excelência.
          </motion.p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <motion.div
              key={`${service.title}-${i}`}
              className={`services__card ${i % 2 !== 0 ? 'services__card--reversed' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.3 + i * 0.15,
                type: 'spring',
                stiffness: 80,
                damping: 20,
              }}
            >
              <div className="services__card-content">
                <div className="services__card-icon">
                  <service.icon size={28} weight="duotone" />
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">{service.description}</p>
                <ul className="services__card-features">
                  {service.features.map((f) => (
                    <li key={f} className="services__card-feature">
                      <span className="services__card-feature-dot" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="services__card-visual">
                  <img src={service.image} alt={service.title} className="services__card-img" />
                  <div className="services__card-img-overlay" />
                </div>

                <a
                  href={`https://wa.me/5571999431211?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20${encodeURIComponent(service.title)}.`}
                  className="services__card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault()
                    const msg = encodeURIComponent(`Olá, gostaria de saber mais sobre o serviço de ${service.title}.`)
                    window.open(`https://wa.me/5571999431211?text=${msg}`, '_blank')
                  }}
                >
                  Saiba mais
                  <ArrowRight size={16} weight="bold" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
