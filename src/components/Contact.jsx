import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  WhatsappLogo,
  Phone,
  EnvelopeSimple,
  MapPin,
  User,
  PaperPlaneTilt,
  CheckCircle,
  WarningCircle,
} from '@phosphor-icons/react'
import './Contact.css'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Nome é obrigatório'
    if (!form.phone.trim()) errs.phone = 'Telefone é obrigatório'
    if (!form.message.trim()) errs.message = 'Mensagem é obrigatória'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Email inválido'
    }
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})

    const msg = encodeURIComponent(
      `Olá! Meu nome é ${form.name}.\n` +
      `${form.email ? `Email: ${form.email}\n` : ''}` +
      `Telefone: ${form.phone}\n\n` +
      `${form.message}`
    )
    window.open(`https://wa.me/5571999431211?text=${msg}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  return (
    <section className="contact section" id="contato" ref={ref}>
      <div className="container">
        <div className="contact__inner">
          <div className="contact__info">
            <motion.span
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              Contato
            </motion.span>

            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, type: 'spring', stiffness: 80, damping: 20 }}
            >
              Vamos conversar sobre seu projeto
            </motion.h2>

            <motion.p
              className="section-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, type: 'spring', stiffness: 80, damping: 20 }}
            >
              Entre em contato conosco para solicitar um orçamento ou tirar dúvidas
              sobre nossos serviços.
            </motion.p>

            <motion.div
              className="contact__channels"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, type: 'spring', stiffness: 80, damping: 20 }}
            >
              <a href="https://wa.me/5571999431211?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." className="contact__channel" target="_blank" rel="noopener noreferrer" id="contact-whatsapp">
                <div className="contact__channel-icon contact__channel-icon--whatsapp">
                  <WhatsappLogo size={22} weight="fill" />
                </div>
                <div>
                  <span className="contact__channel-label">WhatsApp</span>
                  <span className="contact__channel-value">(71) 99943-1211</span>
                </div>
              </a>

              <a href="tel:+5571999431211" className="contact__channel" id="contact-phone">
                <div className="contact__channel-icon">
                  <Phone size={22} weight="fill" />
                </div>
                <div>
                  <span className="contact__channel-label">Telefone</span>
                  <span className="contact__channel-value">(71) 99943-1211</span>
                </div>
              </a>

              <a href="mailto:ecoconstrucaoltda@gmail.com" className="contact__channel" id="contact-email">
                <div className="contact__channel-icon">
                  <EnvelopeSimple size={22} weight="fill" />
                </div>
                <div>
                  <span className="contact__channel-label">Email</span>
                  <span className="contact__channel-value">ecoconstrucaoltda@gmail.com</span>
                </div>
              </a>

              <div className="contact__channel">
                <div className="contact__channel-icon">
                  <MapPin size={22} weight="fill" />
                </div>
                <div>
                  <span className="contact__channel-label">Localização</span>
                  <span className="contact__channel-value">Salvador — Bahia</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="contact__form-wrapper"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, type: 'spring', stiffness: 80, damping: 20 }}
          >
            {submitted ? (
              <div className="contact__success">
                <CheckCircle size={48} weight="duotone" />
                <h3>Mensagem Enviada!</h3>
                <p>Você será redirecionado para o WhatsApp. Aguardamos seu contato.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <h3 className="contact__form-title">Envie sua mensagem</h3>

                <div className="contact__field">
                  <label htmlFor="contact-name" className="contact__label">
                    Nome completo *
                  </label>
                  <div className={`contact__input-wrapper ${errors.name ? 'contact__input-wrapper--error' : ''}`}>
                    <User size={18} weight="regular" className="contact__input-icon" />
                    <input
                      type="text"
                      id="contact-name"
                      className="contact__input"
                      placeholder="Seu nome"
                      value={form.name}
                      onChange={handleChange('name')}
                    />
                  </div>
                  {errors.name && (
                    <span className="contact__error">
                      <WarningCircle size={14} weight="bold" /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="contact__field-row">
                  <div className="contact__field">
                    <label htmlFor="contact-email-field" className="contact__label">
                      Email
                    </label>
                    <div className={`contact__input-wrapper ${errors.email ? 'contact__input-wrapper--error' : ''}`}>
                      <EnvelopeSimple size={18} weight="regular" className="contact__input-icon" />
                      <input
                        type="email"
                        id="contact-email-field"
                        className="contact__input"
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={handleChange('email')}
                      />
                    </div>
                    {errors.email && (
                      <span className="contact__error">
                        <WarningCircle size={14} weight="bold" /> {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="contact__field">
                    <label htmlFor="contact-phone-field" className="contact__label">
                      Telefone *
                    </label>
                    <div className={`contact__input-wrapper ${errors.phone ? 'contact__input-wrapper--error' : ''}`}>
                      <Phone size={18} weight="regular" className="contact__input-icon" />
                      <input
                        type="tel"
                        id="contact-phone-field"
                        className="contact__input"
                        placeholder="(71) 99999-9999"
                        value={form.phone}
                        onChange={handleChange('phone')}
                      />
                    </div>
                    {errors.phone && (
                      <span className="contact__error">
                        <WarningCircle size={14} weight="bold" /> {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-message" className="contact__label">
                    Mensagem *
                  </label>
                  <div className={`contact__input-wrapper contact__input-wrapper--textarea ${errors.message ? 'contact__input-wrapper--error' : ''}`}>
                    <textarea
                      id="contact-message"
                      className="contact__textarea"
                      placeholder="Descreva seu projeto ou dúvida..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange('message')}
                    />
                  </div>
                  {errors.message && (
                    <span className="contact__error">
                      <WarningCircle size={14} weight="bold" /> {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn-primary contact__submit" id="contact-submit-btn">
                  <PaperPlaneTilt size={18} weight="bold" />
                  Enviar via E-mail
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
