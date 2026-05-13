import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Clock, Users, Wrench, ChartLineUp, TreeStructure } from '@phosphor-icons/react'
import './WhyChooseUs.css'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Garantia Técnica',
    description: 'Serviços executados com base em normas técnicas vigentes e critérios rigorosos de engenharia.',
  },
  {
    icon: Clock,
    title: 'Pontualidade',
    description: 'Cumprimento de prazos com planejamento detalhado em cada etapa da obra.',
  },
  {
    icon: Users,
    title: 'Equipe Qualificada',
    description: 'Profissionais experientes e capacitados para cada tipo de serviço.',
  },
  {
    icon: Wrench,
    title: 'Materiais Premium',
    description: 'Utilização de materiais de alta qualidade e marcas reconhecidas no mercado.',
  },
  {
    icon: ChartLineUp,
    title: 'Custo-Benefício',
    description: 'Soluções que equilibram qualidade e investimento, maximizando o retorno.',
  },
  {
    icon: TreeStructure,
    title: 'Sustentabilidade',
    description: 'Práticas construtivas responsáveis que minimizam o impacto ambiental.',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="why section" id="diferenciais" ref={ref}>
      <div className="container">
        <div className="why__header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            Diferenciais
          </motion.span>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, type: 'spring', stiffness: 80, damping: 20 }}
          >
            Por que escolher a Eco Construção?
          </motion.h2>
        </div>

        <div className="why__grid">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              className="why__card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.1,
                type: 'spring',
                stiffness: 100,
                damping: 20,
              }}
            >
              <div className="why__card-icon">
                <reason.icon size={28} weight="duotone" />
              </div>
              <h3 className="why__card-title">{reason.title}</h3>
              <p className="why__card-text">{reason.description}</p>
              <div className="why__card-accent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
