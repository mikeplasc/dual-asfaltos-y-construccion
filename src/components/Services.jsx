import React from "react";

const Services = () => {
  return (
    <section
      id="servicios"
      className="py-16 md:py-32 bg-surface-dim relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-headline text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Competencias Principales
            </span>
            <h2 className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
              SERVICIOS DE INFRAESTRUCTURA
            </h2>
          </div>
          <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed">
            Utilizando ligantes modificados con polímeros de última generación y
            sistemas de nivelación robótica para entregar superficies
            industriales superiores.
          </p>
        </div>

        {/* Services Grid - Mobile Version */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          <ServiceCard
            icon="construction"
            number="01"
            title="Pavimentación Asfáltica"
            description="Pavimentación de alta resistencia para autopistas y vías urbanas con tecnología de punta."
          />
          <ServiceCard
            icon="domain"
            number="02"
            title="Proyectos Industriales"
            description="Soluciones específicas para plantas industriales, almacenes y complejos residenciales."
          />
          <ServiceCard
            icon="build"
            number="03"
            title="Mantenimiento Vial"
            description="Programas de bacheo y mantenimiento preventivo para prolongar la vida útil de sus vías."
          />
          <ServiceCard
            icon="factory"
            number="04"
            title="Infraestructura Civil"
            description="Diseño y ejecución de infraestructura vial integral, desde terracerías hasta señalización."
          />
        </div>

        {/* Services Grid - Desktop Bento Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Feature */}
          <div className="md:col-span-2 group relative h-[500px] overflow-hidden rounded-xl bg-surface-container border border-outline-variant/10">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0Wt7RT4hVLx_wejwbMvohaqX9lfrOzsR2rfarUlW51aYL1zAC6XcoV9FOV-Ud9wsFIcGRV3_pmleaid1nbla2mAMrmp0CYAp2LVJG0kUjLnVMQd9kbyhA17OEewonJXMVc5_VyMYDAZyPr59VSDHpjLYCmtALMce9TNB1H7ZgA07sHE7u0VuhnRp5_zzjyy6Kq8739DVblWC6DZ0JfkqKvvRAIRlKHh8cSp8ZIVU6OrMCrb-iM5s2sq_lfSMDAuaVAEIx6a-jZ9pq"
              alt="Asfalto caliente siendo vertido"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent"></div>
            <div className="absolute bottom-0 p-10">
              <span className="text-primary-container text-[10px] font-bold uppercase tracking-widest mb-3 block">
                01 / Obras Mayores
              </span>
              <h3 className="font-headline font-bold text-3xl text-white mb-4">
                Pavimentación Asfáltica de Precisión
              </h3>
              <p className="text-on-surface-variant text-sm max-w-md mb-6">
                Soluciones de pavimentación de alto rendimiento para autopistas,
                aeropuertos y centros logísticos que requieren máxima
                durabilidad.
              </p>
              <a
                className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group"
                href="#"
              >
                Especificaciones Técnicas{" "}
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Vertical Feature */}
          <div className="group relative h-[500px] overflow-hidden rounded-xl bg-surface-container-high border border-outline-variant/10">
            <div className="absolute inset-0 grid-texture opacity-20"></div>
            <div className="p-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-primary-container text-[10px] font-bold uppercase tracking-widest mb-3 block">
                  02 / Servicio Pesado
                </span>
                <h3 className="font-headline font-bold text-3xl text-white mb-4">
                  Proyectos Industriales
                </h3>
              </div>
              <div>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                  Pavimentación especializada para áreas de maquinaria pesada,
                  patios de almacenamiento y plantas de procesamiento químico.
                </p>
                <div className="w-12 h-1 bg-primary"></div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative h-[350px] overflow-hidden rounded-xl bg-surface-container border border-outline-variant/10">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAdppHrD46zWj0Qkj8iRv-wm9b33S2TKrAl4_zeFye5Xx4HPI3Q4-iT-zNBOQCg0w85iGrn5PJF6uVZiGamfbUwwIBzcVrbZRS_dY3xJzXHocN2--Kso4adilkE2GI-mpBopuMjKBTL1yWeV-W72vKdpjEMrh9VyS2I1zHnp9cJoetXBASogwqZ67NWXnoGST39L65nU7AIaKESq5zz5xEYG9_5tgeaRET-RyJT22rvTHumGq9c0U2g7tKzT_K83DY0d4h7Rysne7h"
              alt="Trabajador de construcción con equipo de seguridad"
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <h3 className="font-headline font-bold text-xl text-white mb-2">
                Mantenimiento Vial
              </h3>
              <p className="text-on-surface-variant text-xs">
                Sellado preventivo y reparaciones estructurales para extender
                los ciclos de vida del pavimento.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="md:col-span-2 group relative h-[350px] overflow-hidden rounded-xl bg-surface-container-high border border-outline-variant/10">
            <div className="p-10 flex h-full items-center gap-10">
              <div className="hidden md:block w-48 h-48 rounded-lg bg-surface overflow-hidden border border-outline-variant/20">
                <img
                  className="w-full h-full object-cover grayscale opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaHTk_V4_Ar5o-RahEa0jmo8fu0HPDHgYR9-jbWKBDECTwRwXu4insGbExI6TtFauYEkdSzVMhfBitLpaBfN0uIwEi8QpYnMlPf8eaOMMJyWtFdy8ptOsTizuTK9AiTbH26XolxJkgq4DkLs2YVjm6KFsXMVIz5msjngo2gZ417MryOy1Lpf_hJOTUyjP1-I5MpnRoSia8Ao_kwJ8_L9VzhMmopLFRUD5-kbJ5Za0nKKKmKISv5SGacXjU0zl9U5cNK4czhFn6l_O4"
                  alt="Detalle de textura de asfalto"
                />
              </div>
              <div className="flex-1">
                <span className="text-primary-container text-[10px] font-bold uppercase tracking-widest mb-3 block">
                  04 / Ciclo de Vida
                </span>
                <h3 className="font-headline font-bold text-2xl text-white mb-4">
                  Construcción de Infraestructura Civil
                </h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  Trabajos de terracería integrales, sistemas de drenaje y
                  preparación de sitio para desarrollo urbano a gran escala.
                </p>
                <div className="flex gap-4">
                  <span className="px-3 py-1 rounded bg-surface text-primary text-[10px] font-bold uppercase border border-outline-variant/10">
                    Topografía
                  </span>
                  <span className="px-3 py-1 rounded bg-surface text-primary text-[10px] font-bold uppercase border border-outline-variant/10">
                    Nivelación
                  </span>
                  <span className="px-3 py-1 rounded bg-surface text-primary text-[10px] font-bold uppercase border border-outline-variant/10">
                    Drenaje
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Mobile Service Card Component
const ServiceCard = ({ icon, number, title, description }) => (
  <div className="p-6 bg-surface-container rounded-xl border border-outline-variant/10 flex flex-col gap-4 group hover:bg-surface-container-high transition-all">
    <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h5 className="font-headline text-xl font-bold">{title}</h5>
    <p className="text-on-surface-variant text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

export default Services;
