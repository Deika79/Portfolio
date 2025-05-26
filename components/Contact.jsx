import ContactForm from './ContactForm'; 

const ContactSection = () => {
  return (
    <section className="contact-page">
      <h2>Contacto</h2>
      <div className="contact-info">
        <p>¿Quieres trabajar conmigo? ¡Hablemos!</p>
        <p>Email: d.garcia@colegioarula.com</p>
        <p>Teléfono: +34 123 456 789</p>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
