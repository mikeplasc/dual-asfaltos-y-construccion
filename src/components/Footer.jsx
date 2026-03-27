import React from "react";

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest w-full py-16 px-12 border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <div className="text-lg font-bold text-primary mb-4 font-headline uppercase tracking-tighter">
            DUAL ASFALTOS Y CONSTRUCCIÓN
          </div>
          <p className="text-outline font-body text-xs font-medium uppercase tracking-widest leading-relaxed">
            © 2026 DUAL ASFALTOS Y CONSTRUCCIÓN. Ingeniería para el Futuro de la
            Infraestructura.
          </p>
        </div>

        <div>
          <h5 className="text-primary font-body text-xs font-bold uppercase tracking-widest mb-6">
            Operaciones
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                className="font-body text-xs font-medium uppercase tracking-widest text-outline hover:text-primary transition-opacity duration-200"
                href="#"
              >
                Cumplimiento
              </a>
            </li>
            <li>
              <a
                className="font-body text-xs font-medium uppercase tracking-widest text-outline hover:text-primary transition-opacity duration-200"
                href="#"
              >
                Estándares de Seguridad
              </a>
            </li>
            <li>
              <a
                className="font-body text-xs font-medium uppercase tracking-widest text-outline hover:text-primary transition-opacity duration-200"
                href="#"
              >
                Sustentabilidad
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-primary font-body text-xs font-bold uppercase tracking-widest mb-6">
            Corporativo
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                className="font-body text-xs font-medium uppercase tracking-widest text-outline hover:text-primary transition-opacity duration-200"
                href="#"
              >
                Relaciones con Inversionistas
              </a>
            </li>
            <li>
              <a
                className="font-body text-xs font-medium uppercase tracking-widest text-outline hover:text-primary transition-opacity duration-200"
                href="#"
              >
                Noticias y Prensa
              </a>
            </li>
            <li>
              <a
                className="font-body text-xs font-medium uppercase tracking-widest text-outline hover:text-primary transition-opacity duration-200"
                href="#"
              >
                Carreras
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-primary font-body text-xs font-bold uppercase tracking-widest mb-6">
            Legal
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                className="font-body text-xs font-medium uppercase tracking-widest text-outline hover:text-primary transition-opacity duration-200"
                href="#"
              >
                Política de Privacidad
              </a>
            </li>
            <li>
              <a
                className="font-body text-xs font-medium uppercase tracking-widest text-outline hover:text-primary transition-opacity duration-200"
                href="#"
              >
                Términos de Servicio
              </a>
            </li>
            <li>
              <a
                className="font-body text-xs font-medium uppercase tracking-widest text-outline hover:text-primary transition-opacity duration-200"
                href="#"
              >
                Soporte de Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
