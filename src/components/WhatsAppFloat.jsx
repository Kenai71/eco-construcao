import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { WhatsappLogo, X } from '@phosphor-icons/react'
import './WhatsAppFloat.css'

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (tooltip) {
      const timer = setTimeout(() => setTooltip(false), 8000)
      return () => clearTimeout(timer)
    }
  }, [tooltip])

  if (!visible) return null

  return (
    <motion.div
      className="whatsapp-float"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      <AnimatePresence>
        {tooltip && (
          <motion.div
            className="whatsapp-float__tooltip"
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <button
              className="whatsapp-float__tooltip-close"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTooltip(false) }}
              aria-label="Fechar"
            >
              <X size={12} weight="bold" />
            </button>
            <p>Fale conosco pelo WhatsApp!</p>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/5571999431211?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
        className="whatsapp-float__btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
        id="whatsapp-float-btn"
      >
        <WhatsappLogo size={28} weight="fill" />
        <span className="whatsapp-float__pulse" />
      </a>
    </motion.div>
  )
}
