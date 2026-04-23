import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["nosotros", "proyectos", "contacto"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section after navigating to home
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [location]);

  const goToSection = (sectionId) => {
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <nav className="hidden md:block fixed top-0 w-full z-50 bg-[#0e1322]/80 backdrop-blur-xl border-b border-[#424754]/15 shadow-2xl shadow-[#002e6a]/25">
        <div className="flex justify-between items-center h-20 px-12 max-w-full mx-auto">
          <Link
            to="/"
            className="text-xl font-black tracking-tighter text-primary font-headline hover:opacity-80 transition-opacity"
          >
            DUAL ASFALTOS Y CONSTRUCCIÓN
          </Link>
          <div className="flex items-center space-x-8">
            <Link
              className={`font-headline tracking-tight text-sm uppercase font-bold transition-colors ${
                location.pathname === "/servicios"
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              to="/servicios"
            >
              Servicios
            </Link>
            <button
              className={`font-headline tracking-tight text-sm uppercase font-bold transition-colors ${
                activeSection === "nosotros"
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              onClick={() => goToSection("nosotros")}
            >
              Nosotros
            </button>
            <button
              className={`font-headline tracking-tight text-sm uppercase font-bold transition-colors ${
                activeSection === "proyectos"
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              onClick={() => goToSection("proyectos")}
            >
              Proyectos
            </button>
            <button
              className={`font-headline tracking-tight text-sm uppercase font-bold transition-colors ${
                activeSection === "contacto"
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              onClick={() => goToSection("contacto")}
            >
              Contacto
            </button>
          </div>
          <button
            onClick={() => goToSection("contacto")}
            className="industrial-gradient text-on-primary font-headline font-bold uppercase tracking-wider text-xs px-6 py-3 rounded hover:opacity-90 active:scale-95 transition-all duration-150"
          >
            Solicitar Cotización
          </button>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 w-full z-50 bg-surface-container-low border-none shadow-2xl shadow-blue-900/20 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="material-symbols-outlined text-primary">menu</span>
          </button>
          <Link
            to="/"
            className="font-headline tracking-tight text-xl font-bold uppercase tracking-widest text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            DUAL ASFALTOS Y CONSTRUCCIÓN
          </Link>
        </div>
        <span className="material-symbols-outlined text-primary">
          engineering
        </span>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-surface-container-lowest/95 backdrop-blur-xl pt-20">
          <div className="flex flex-col p-6 space-y-4">
            <Link
              className="font-headline text-lg uppercase font-bold text-primary py-3 border-b border-outline-variant/20"
              to="/servicios"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </Link>
            <button
              className="font-headline text-lg uppercase font-bold text-on-surface-variant py-3 border-b border-outline-variant/20 text-left"
              onClick={() => goToSection("nosotros")}
            >
              Nosotros
            </button>
            <button
              className="font-headline text-lg uppercase font-bold text-on-surface-variant py-3 border-b border-outline-variant/20 text-left"
              onClick={() => goToSection("proyectos")}
            >
              Proyectos
            </button>
            <button
              className="font-headline text-lg uppercase font-bold text-on-surface-variant py-3 border-b border-outline-variant/20 text-left"
              onClick={() => goToSection("contacto")}
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
