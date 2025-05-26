import React from 'react';

const ContactForm = () => {
  return (
    <form
      action="https://formspree.io/f/mpwdgkwd"
      method="POST"
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
  );
};

export default ContactForm;
