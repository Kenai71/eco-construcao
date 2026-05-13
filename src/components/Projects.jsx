import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { X } from '@phosphor-icons/react'
import './Projects.css'

const projects = [
  {
    id: 1,
    src: '/images/piscina.png',
    title: 'Piscina de Alvenaria',
    category: 'Impermeabilização',
    description: 'Aplicação de Imperlast Acqua Duo em piscina de alvenaria — antes e depois do tratamento impermeabilizante.',
  },
  {
    id: 2,
    src: '/images/piscina-de-azulejo.jpeg',
    title: 'Piscina de Azulejo',
    category: 'Impermeabilização',
    description: 'Recuperação e impermeabilização de piscina de azulejo com sistema Imperlast Acqua Duo.',
  },
  {
    id: 3,
    src: '/images/teto.png',
    title: 'Cobertura Metálica Industrial',
    category: 'Cobertura Metálica',
    description: 'Instalação de cobertura metálica sanduíche em galpão industrial com isolamento termoacústico.',
  },
  {
    id: 4,
    src: '/images/impermeabilizacao.png',
    title: 'Impermeabilização de Laje',
    category: 'Impermeabilização',
    description: 'Sistema de impermeabilização profissional para laje plana, garantindo estanqueidade total.',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="projects section" id="projetos" ref={ref}>
      <div className="container">
        <div className="projects__header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            Nossos Projetos
          </motion.span>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, type: 'spring', stiffness: 80, damping: 20 }}
          >
            Resultados que comprovam nossa expertise
          </motion.h2>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className={`projects__item ${i === 0 ? 'projects__item--large' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.12,
                type: 'spring',
                stiffness: 80,
                damping: 20,
              }}
              onClick={() => setLightbox(project)}
              role="button"
              tabIndex={0}
              aria-label={`Ver projeto: ${project.title}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(project)}
            >
              <img
                src={project.src}
                alt={project.title}
                className="projects__item-img"
                loading="lazy"
              />
              <div className="projects__item-overlay">
                <span className="projects__item-category">{project.category}</span>
                <h3 className="projects__item-title">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          className="projects__lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
        >
          <motion.div
            className="projects__lightbox-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="projects__lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Fechar"
            >
              <X size={24} weight="bold" />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="projects__lightbox-img"
            />
            <div className="projects__lightbox-info">
              <span className="projects__lightbox-category">{lightbox.category}</span>
              <h3 className="projects__lightbox-title">{lightbox.title}</h3>
              <p className="projects__lightbox-description">{lightbox.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
