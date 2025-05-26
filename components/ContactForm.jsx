import React, { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch('https://formspree.io/f/mpwdgkwd', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
        } else {
          alert('Hubo un problema al enviar el formulario.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error de red al enviar el formulario.');
      });
  };

  return (
    <>
      {submitted ? (
        <p className="text-green-600 font-semibold">✅ Mensaje enviado con éxito.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <label>
            Nombre:
            <input type="text" name="name" required className="p-2 border rounded" />
          </label>
          <label>
            Correo electrónico:
            <input type="email" name="email" required className="p-2 border rounded" />
          </label>
          <label>
            Mensaje:
            <textarea name="message" required className="p-2 border rounded h-32" />
          </label>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            Enviar
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
