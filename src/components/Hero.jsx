import React from "react";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image and Effects */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          src="/images/image11.jpeg"
          alt="Trabajadores colando concreto en obra de infraestructura"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
        <div className="absolute inset-0 grid-texture"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary font-headline text-[10px] uppercase tracking-widest font-bold">
              Soluciones de Ingeniería de Precisión
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-headline font-bold text-4xl md:text-6xl lg:text-8xl text-white tracking-tighter leading-tight mb-8">
            CONSTRUIMOS LAS <br />
            <span className="text-primary">BASES</span> DEL <br />
            COMERCIO.
          </h1>

          {/* Description */}
          <p className="text-on-surface-variant text-base md:text-lg lg:text-xl max-w-xl mb-10 leading-relaxed font-light">
            Asfalto e infraestructura civil diseñados para la era industrial.
            Entregando durabilidad que resiste las cargas más pesadas y los
            entornos más exigentes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("nosotros")}
              className="industrial-gradient text-on-primary px-8 py-4 rounded font-headline font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20 hover:opacity-90 transition-opacity"
            >
              Nuestra Flotilla
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="bg-surface-variant/40 backdrop-blur-md border border-outline-variant/30 text-white px-8 py-4 rounded font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-variant/60 transition-all"
            >
              Ver Portafolio de Proyectos
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar - Desktop Only */}
      <div className="hidden md:block absolute bottom-0 right-0 w-full md:w-3/4 bg-surface-container border-t border-outline-variant/15 p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="block text-primary font-headline text-3xl md:text-4xl font-bold mb-1">
              500+
            </span>
            <span className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">
              Km Pavimentados al Año
            </span>
          </div>
          <div>
            <span className="block text-primary font-headline text-3xl md:text-4xl font-bold mb-1">
              15+
            </span>
            <span className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">
              Años de Experiencia
            </span>
          </div>
          <div>
            <span className="block text-primary font-headline text-3xl md:text-4xl font-bold mb-1">
              100%
            </span>
            <span className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">
              Cumplimiento de Seguridad
            </span>
          </div>
          <div>
            <span className="block text-primary font-headline text-3xl md:text-4xl font-bold mb-1">
              24/7
            </span>
            <span className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">
              Soporte Operacional
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
