import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    projectScope: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Gracias por contactarnos. Nos pondremos en contacto pronto.");
  };

  return (
    <section
      id="contacto"
      className="py-16 md:py-32 bg-surface-container relative"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto glass-card rounded-2xl border border-outline-variant/20 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Info */}
            <div className="p-8 md:p-16 industrial-gradient relative">
              <div className="absolute inset-0 grid-texture opacity-20"></div>
              <div className="relative z-10 text-on-primary">
                <h2 className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl mb-8 tracking-tighter leading-none">
                  INICIA TU <br />
                  PROYECTO DE INFRAESTRUCTURA.
                </h2>
                <p className="text-on-primary/80 mb-12 text-base md:text-lg leading-relaxed">
                  ¿Listo para una solución de grado industrial? Nuestros
                  consultores de ingeniería están listos para proporcionar una
                  evaluación de viabilidad técnica para tu próximo proyecto.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-on-primary/60">
                      location_on
                    </span>
                    <span className="text-xs md:text-sm font-bold uppercase tracking-widest">
                      Oficina Central: Distrito Industrial VII
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-on-primary/60">
                      mail
                    </span>
                    <span className="text-xs md:text-sm font-bold uppercase tracking-widest">
                      proyectos@dual-ayc.com
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-on-primary/60">
                      phone_in_talk
                    </span>
                    <span className="text-xs md:text-sm font-bold uppercase tracking-widest">
                      +52 (800) DUAL-INFRA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="p-8 md:p-16 bg-surface-container-high">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 text-white focus:ring-1 focus:ring-primary transition-all outline-none"
                      placeholder="Juan Pérez"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 text-white focus:ring-1 focus:ring-primary transition-all outline-none"
                      placeholder="Constructora Industrial S.A."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 text-white focus:ring-1 focus:ring-primary transition-all outline-none"
                    placeholder="correo@empresa.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">
                    Teléfono (Opcional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 text-white focus:ring-1 focus:ring-primary transition-all outline-none"
                    placeholder="+52 ..."
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">
                    Alcance del Proyecto
                  </label>
                  <select
                    name="projectScope"
                    value={formData.projectScope}
                    onChange={handleChange}
                    className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 text-white focus:ring-1 focus:ring-primary transition-all outline-none"
                    required
                  >
                    <option value="">Seleccionar Tipo de Proyecto</option>
                    <option value="highway">
                      Nueva Pavimentación de Carretera
                    </option>
                    <option value="industrial">
                      Instalación Logística Industrial
                    </option>
                    <option value="maintenance">
                      Programa de Mantenimiento Vial
                    </option>
                    <option value="civil">
                      Ingeniería de Infraestructura Civil
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">
                    Resumen Técnico
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 text-white focus:ring-1 focus:ring-primary transition-all outline-none resize-none"
                    placeholder="Describe brevemente los requisitos de tu proyecto..."
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary font-headline font-bold uppercase tracking-[0.2em] py-4 rounded hover:bg-white transition-all duration-300"
                >
                  Enviar Solicitud de Cotización
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
