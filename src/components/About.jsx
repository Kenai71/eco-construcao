import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Certificate, Ruler, Handshake } from '@phosphor-icons/react'
import './About.css'

const values = [
  {
    icon: Certificate,
    title: 'Normas Técnicas',
    text: 'Execução com base em critérios técnicos e normas vigentes da engenharia civil.',
  },
  {
    icon: Ruler,
    title: 'Precisão Construtiva',
    text: 'Boas práticas garantindo estanqueidade e durabilidade em cada projeto.',
  },
  {
    icon: Handshake,
    title: 'Compromisso Total',
    text: 'Foco na satisfação do cliente com transparência e responsabilidade.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="about section" id="sobre" ref={ref}>
      <div className="about__inner container">
        <div className="about__content">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            Quem Somos
          </motion.span>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, type: 'spring', stiffness: 80, damping: 20 }}
          >
            Construindo com responsabilidade e expertise técnica
          </motion.h2>

          <motion.div
            className="about__text"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 80, damping: 20 }}
          >
            <p>
              A <strong>Eco Construção</strong> atua no segmento da construção civil,
              com especialização em método construtivo, cobertura Imperlast e
              sistemas de impermeabilização e tratamento de patologias construtivas
              relacionadas à infiltração e umidade.
            </p>
            <p>
              Somos representantes nacionais da <strong>Imperlast</strong>. Além de vendas
              e construções, também realizamos treinamentos especializados para equipes.
            </p>
            <p>
              A empresa executa serviços com base em critérios técnicos, seguindo normas
              vigentes e boas práticas da engenharia, visando garantir a estanqueidade
              e durabilidade de cada projeto.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="about__values"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35 }}
        >
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              className="about__value"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.4 + i * 0.12,
                type: 'spring',
                stiffness: 100,
                damping: 20,
              }}
            >
              <div className="about__value-icon">
                <item.icon size={28} weight="duotone" />
              </div>
              <div>
                <h3 className="about__value-title">{item.title}</h3>
                <p className="about__value-text">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
