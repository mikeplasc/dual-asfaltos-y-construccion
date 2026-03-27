import React from "react";

const MobileNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full h-20 flex justify-around items-center px-4 pb-safe bg-surface-container-low/80 backdrop-blur-xl border-t border-outline-variant/15 z-50 rounded-t-xl shadow-[0px_-12px_24px_-12px_rgba(0,46,106,0.3)]">
      <a
        className="flex flex-col items-center justify-center industrial-gradient text-on-primary rounded-xl px-4 py-1.5 transition-transform active:translate-y-0.5"
        href="#servicios"
      >
        <span className="material-symbols-outlined">construction</span>
        <span className="font-body text-[10px] uppercase font-semibold tracking-tighter">
          Servicios
        </span>
      </a>

      <a
        className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1.5 hover:text-white transition-transform active:translate-y-0.5"
        href="#nosotros"
      >
        <span className="material-symbols-outlined">engineering</span>
        <span className="font-body text-[10px] uppercase font-semibold tracking-tighter">
          Nosotros
        </span>
      </a>

      <a
        className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1.5 hover:text-white transition-transform active:translate-y-0.5"
        href="#proyectos"
      >
        <span className="material-symbols-outlined">domain</span>
        <span className="font-body text-[10px] uppercase font-semibold tracking-tighter">
          Proyectos
        </span>
      </a>

      <a
        className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1.5 hover:text-white transition-transform active:translate-y-0.5"
        href="#contacto"
      >
        <span className="material-symbols-outlined">mail</span>
        <span className="font-body text-[10px] uppercase font-semibold tracking-tighter">
          Contacto
        </span>
      </a>
    </nav>
  );
};

export default MobileNav;
