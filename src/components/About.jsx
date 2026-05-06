import React from "react";

const About = () => {
  return (
    <section
      id="nosotros"
      className="py-16 md:py-32 bg-surface-container-lowest"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <img
              className="w-full h-[400px] md:h-[600px] object-cover rounded-lg border border-outline-variant/10 shadow-2xl"
              src="/images/image15.jpeg"
              alt="Caseta de acceso de fraccionamiento terminada"
            />
            <div className="hidden md:block absolute -bottom-8 -right-8 glass-card p-8 rounded-lg border border-outline-variant/20">
              <p className="font-headline text-5xl font-bold text-primary mb-2">
                100%
              </p>
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.2em]">
                Ejecución Propia
              </p>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7">
            <span className="text-primary font-headline text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
              Nuestro Legado
            </span>
            <h2 className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-8 tracking-tighter leading-[1.1]">
              INGENIERÍA PARA EL FUTURO DE LA CONECTIVIDAD
            </h2>

            <div className="space-y-6 text-on-surface-variant font-light leading-relaxed text-base md:text-lg">
              <p>
                Fundada en los principios de integridad estructural y excelencia
                operativa, DUAL ASFALTOS Y CONSTRUCCIÓN ha evolucionado hasta
                convertirse en una potencia de la ingeniería civil. No solo
                pavimentamos; diseñamos las arterias críticas que impulsan la
                logística moderna y la expansión urbana.
              </p>
              <p>
                Nuestro equipo combina décadas de experiencia en campo con
                telemetría moderna y ciencia de materiales. Cada proyecto que
                emprendemos es un testimonio de nuestro compromiso con la
                filosofía "El Monolito" — estructuras construidas para durar más
                que la competencia y resistir los elementos.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-headline font-bold text-sm uppercase tracking-widest mb-2">
                  Nuestra Visión
                </h4>
                <p className="text-on-surface-variant text-sm">
                  Establecer el estándar global en pavimentación industrial a
                  través de tecnología sustentable y durabilidad inigualable.
                </p>
              </div>
              <div>
                <h4 className="text-white font-headline font-bold text-sm uppercase tracking-widest mb-2">
                  Nuestra Misión
                </h4>
                <p className="text-on-surface-variant text-sm">
                  Empoderar a la industria mediante infraestructura resiliente y
                  gestión de construcción basada en datos.
                </p>
              </div>
            </div>

            {/* Stats - Mobile */}
            <div className="md:hidden mt-12 flex gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-headline font-bold text-primary">
                  15+
                </span>
                <span className="text-[10px] uppercase tracking-widest text-outline">
                  Años Experiencia
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-headline font-bold text-primary">
                  500+
                </span>
                <span className="text-[10px] uppercase tracking-widest text-outline">
                  Proyectos
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-24 md:mt-32">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <span className="text-primary font-headline text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              La Ventaja
            </span>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-white tracking-tight">
              POR QUÉ LOS LÍDERES CORPORATIVOS CONFÍAN EN DUAL
            </h2>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-px bg-outline-variant/10 border border-outline-variant/10 rounded-xl overflow-hidden">
            <AdvantageCard
              icon="precision_manufacturing"
              title="Calidad de Materiales"
              description="Mezclas de ligantes propietarias y selección premium de agregados para máxima resistencia a cargas."
            />
            <AdvantageCard
              icon="groups"
              title="Experiencia de Élite"
              description="Ingenieros certificados y operadores maestros supervisando cada milímetro de construcción."
            />
            <AdvantageCard
              icon="timer"
              title="Tiempos Críticos"
              description="Movilización rápida y programas de ejecución 24/7 para minimizar el tiempo de inactividad operacional."
            />
            <AdvantageCard
              icon="payments"
              title="Precios Estratégicos"
              description="Modelado transparente de costos proporcionando ROI superior mediante pavimentos de vida extendida."
            />
          </div>

          {/* Mobile List */}
          <div className="md:hidden space-y-4 max-w-2xl mx-auto w-full">
            <AdvantageListItem
              icon="verified"
              iconColor="text-primary"
              borderColor="border-primary"
              title="Materiales de Alta Calidad"
              description="Mezclas asfálticas de grado superior certificadas bajo normas internacionales."
            />
            <AdvantageListItem
              icon="groups"
              iconColor="text-secondary"
              borderColor="border-secondary-container"
              title="Equipo Experimentado"
              description="Ingenieros y operadores altamente capacitados en maquinaria pesada."
            />
            <AdvantageListItem
              icon="schedule"
              iconColor="text-primary"
              borderColor="border-primary"
              title="Entrega a Tiempo"
              description="Cumplimiento riguroso de cronogramas mediante gestión logística eficiente."
            />
            <AdvantageListItem
              icon="payments"
              iconColor="text-secondary"
              borderColor="border-secondary-container"
              title="Precios Competitivos"
              description="Optimización de recursos para ofrecer el mejor retorno de inversión."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Desktop Advantage Card
const AdvantageCard = ({ icon, title, description }) => (
  <div className="bg-surface p-12 hover:bg-surface-container transition-colors duration-300">
    <span className={`material-symbols-outlined text-primary text-4xl mb-6`}>
      {icon}
    </span>
    <h4 className="text-white font-headline font-bold text-lg mb-4">{title}</h4>
    <p className="text-on-surface-variant text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

// Mobile Advantage List Item
const AdvantageListItem = ({
  icon,
  iconColor,
  borderColor,
  title,
  description,
}) => (
  <div
    className={`flex items-center gap-6 p-4 bg-surface-container rounded-lg border-l-4 ${borderColor}`}
  >
    <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
    <div>
      <h5 className="font-bold text-sm">{title}</h5>
      <p className="text-xs text-on-surface-variant">{description}</p>
    </div>
  </div>
);

export default About;
