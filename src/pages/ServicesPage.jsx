import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      <Header />
      <main className="relative overflow-hidden grid-texture pt-20">

        {/* Hero Section */}
        <section className="relative h-[614px] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover grayscale-[0.5] contrast-[1.1]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL7iL7MIcBp0jT8ObTnO56EsNFNyaj3pOEUCfecaVT2WjYhaYeqf7fbTxJDDGeQpTtxtBfbXfO-ZwIn5H4sm03aB3vUH21nijMctLRhxJ3HbGGBjySVW-Zq7_vPB3NU1kdmEwjfM2ELA2INvkHHunPOrmEApHPIg73KYUE8Sw_5rpkgq92fyQGR0QGR6Ko-cyf5zRzE443g9NGQhqrmuiaJYRA0wZqpfJi7FmfwE16pKK0-pzXNuEu_JLL0vxPnWK_KdauLxaVeDU"
              alt="Construcción de autopista al anochecer con maquinaria pesada"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
            <div className="absolute inset-0 bg-surface/40"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <span className="font-label text-primary tracking-[0.3em] uppercase text-xs mb-4 block">
              Portafolio Industrial
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              NUESTRAS SOLUCIONES
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
        </section>

        {/* Construction Section */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative group rounded-xl overflow-hidden aspect-[16/10]">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD-bahbPGmoSRTRMSSuhs1Fh0ZwUeSXkSUSQjIa6eyDrllXzgy5EHTH-dO-XRxvXa2o3Ek3HMaUaUiTltYWaNJ1B2hAilQRKCyJLApfNzkWAa5uoq09UwdMF_5kmuFmX1k02bWsQ2wN4CSSK-X2KpseH3kjSAHTIhPWUVntZgDiJYgxUtXVP4CIRgp5bgLi_s9f6IX181GEJcu33mzXQDMbnUfzjhKTafem7QqhSPV1wsmQYH0EVnecSp8Q4CLY0UhtZcnlAXP-6Q"
                alt="Excavadoras trabajando en terracerías a gran escala"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/80 to-transparent"></div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2">
                <span className="text-secondary font-bold text-sm tracking-widest uppercase">
                  Infraestructura Base
                </span>
                <h2 className="font-headline text-4xl font-bold text-white leading-tight">
                  Construcción
                </h2>
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                Ejecutamos proyectos de infraestructura con rigor técnico,
                asegurando la estabilidad y durabilidad de cada estructura desde
                su concepción en terreno.
              </p>
              <div className="space-y-4">
                {["Terracerías", "Drenaje y Estructuras", "Pavimentación Integral"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 p-4 bg-surface-container rounded-lg border-l-4 border-primary"
                  >
                    <span className="material-symbols-outlined text-amber-500">add</span>
                    <span className="font-headline font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Asphalt Paving Section */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-primary font-bold text-sm tracking-widest uppercase">
                  Ingeniería de Superficie
                </span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mt-4">
                  Pavimentación Asfáltica
                </h2>
              </div>
              <span className="font-label text-on-surface-variant text-xs uppercase tracking-widest">
                Estándares Internacionales
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AsphaltCard
                icon="engineering"
                title="Mezclas Asfálticas en Caliente"
                description="Producción y aplicación de mezclas de alto desempeño diseñadas para resistir cargas pesadas y climas extremos."
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuApYbkUlrDvcNe7px0JeKbgKJxwuNugOz0kSbECbsUfIELWl-aFCL-qDGbouLtPe1cFUphzxo2FhWqBa8kDc_Pnfxe3Lrucb9W5IJ4sTIRzFWbdB50og_D0rjL7GwrxHOAPze1F7Cu6ncfWeOdlAi1SVSu257yzOdit7o8OpH8r77_1ixTwspVvY3MAbhlktEjn-4RiKbxxdaYp9NGDlGvkRmHw1sgaD_Twb5wY8ggci2Q4q2csvRQHJ89Z1S3w4I9x5STI-hVm2U0"
                imageAlt="Asfalto caliente siendo extendido"
              />
              <AsphaltCard
                icon="build"
                title="Mantenimiento y Rehabilitación"
                description="Soluciones correctivas y preventivas para prolongar la vida útil de carpetas asfálticas existentes con mínima interrupción."
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBJiFPNpnwsVMmGVh6UlhSRknFPfovx3s8bsUJqTG_o5TAewKh8Z0v4sxnTHsjfFsscH-gm1a1PlZ0eRXYGBDlMJhmF_GHmEMMJJME4J9g42Ir988xLdQK1dArDdrxi9MBH3i0bWbx2jfCpRc4Yr7bq9x_DHZ6k-Am_A_ISx4uFdNT9kLO3xiwjqwtwJCXtizjnVTqxOdr6dOqLXg71BFs6EL6XC61aR3HDrxNMT2dXv69PU1PQiRcuPHeRb1D6dyNtNO7_joB2SZA"
                imageAlt="Reparación de grietas en asfalto industrial"
              />
              <AsphaltCard
                icon="waves"
                title="Riegos de Impregnación"
                description="Aplicación de emulsiones asfálticas de precisión para asegurar la adherencia perfecta entre capas de pavimento."
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDjfMk2oa_IjdQrT6Pf-wX1QxMqDL83lGKTB2_m9sUg0meLIAuHj4V3Rijujq3ItItz4k8o959WNyeijqHIRZ_nXZoGYS_9dJY6hZH9V0G8M9pUobW1rtnCixS4_Yd4CdKw0XqSrqO4G49EBHYk7LQ4xUSacO6CJ_aTu9Nr2ekGgFsFPbZw-Rmpqmwgw-rzs-oVnOKWl6qtYBeHFp4J-DL0fKJczqCh6PBHUxv9p-UA72uwe6dCcgR4DnO2y5DKtrihot_ITKPjOY8"
                imageAlt="Aplicación de emulsión asfáltica en base de camino"
              />
            </div>
          </div>
        </section>

        {/* MAQYTOP Partnership Section */}
        <section className="relative py-20 px-8 overflow-hidden">
          <div className="absolute inset-0 bg-primary/5"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="bg-surface-container border border-white/5 p-12 rounded-2xl flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-primary"></div>
                  <span className="text-primary font-bold text-sm uppercase tracking-widest">
                    Alianza Estratégica
                  </span>
                </div>
                <h2 className="font-headline text-4xl font-bold text-white">
                  Renta de Maquinaria (MAQYTOP)
                </h2>
                <p className="text-on-surface-variant text-lg">
                  Potencia tu proyecto con la flota más avanzada de la región. A
                  través de nuestra filial{" "}
                  <span className="text-white font-bold">MAQYTOP</span>,
                  ofrecemos acceso a maquinaria de última generación con
                  mantenimiento certificado.
                </p>
                <div className="flex flex-col gap-4">
                  <button className="industrial-gradient text-on-primary px-10 py-4 rounded font-bold hover:brightness-110 transition-all w-fit uppercase tracking-tighter text-lg">
                    SOLICITAR EQUIPO EN MAQYTOP
                  </button>
                  <p className="text-xs text-slate-500 italic">
                    * Nota: Al hacer clic, serás redirigido al portal externo de
                    gestión de rentas de MAQYTOP.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
                  <img
                    className="relative rounded-xl shadow-2xl border border-white/10"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2dQl5l9rnRn5q2wRi22xrgT79xv2-yjasQEvxGqXNdnZdmHciIwNtpzt7mzvslXIWt5aVTJ8k6W-5OQv10LNrZfUJbpvScbQNzTZ55cl7Shi2F8D5w2-m03vmC-eXi4NtgsflMHs_spPSd27MlYrd9BiAVvJrcWn_L5nQUwW_NGxUskT3R5IAb-8HRAWLhyePJUUs4mBlQla-iKfs2sIC71zvO6fVlnZOA5BTdb6cC9BZeplGvNCHjsDbMesHxItgWB5BbnmHV8g"
                    alt="Flotilla de maquinaria pesada en patio de renta"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Topography Section */}
        <section className="py-24 max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold text-white mb-4">
              Topografía de Precisión
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Tecnología de escaneo geoespacial y mapeo digital para máxima
              exactitud en obra.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-8 items-start p-8 bg-surface-container rounded-xl">
              <div className="w-16 h-16 bg-primary-container/20 rounded flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-4xl">flight</span>
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold text-white mb-2">
                  Levantamiento con Drones
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  Fotogrametría de alta resolución para modelos digitales de
                  elevación y seguimiento de avance de obra en tiempo real.
                </p>
                <ul className="text-sm text-primary font-medium space-y-1">
                  <li>• Modelado 3D de terreno</li>
                  <li>• Ortomosaicos georreferenciados</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8 items-start p-8 bg-surface-container rounded-xl">
              <div className="w-16 h-16 bg-primary-container/20 rounded flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-4xl">view_in_ar</span>
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold text-white mb-2">
                  Escaneo 3D &amp; LiDAR
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  Captura de nubes de puntos con precisión milimétrica para
                  proyectos que requieren el más alto estándar de detalle técnico.
                </p>
                <ul className="text-sm text-primary font-medium space-y-1">
                  <li>• Sensores LiDAR de grado industrial</li>
                  <li>• Ingeniería inversa de sitios</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section className="py-24 bg-gradient-to-b from-surface to-surface-container-lowest border-y border-white/5">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                className="rounded-2xl border-2 border-primary/20 shadow-2xl w-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdMZNZ8WN3HCfRmQ-4P19IAcFpdbmtkun3xDuv_c0NlydXnJDMewJo9w1OPJv2SWHZtJLXfIwBbLFd-nnB4vykmVBJldXL50hiV50RAaiy6nIEF03jltVFPzW7pp4a15SXIZqB4WDJ1CMUIQ8puXbn-RicWBhkJS72qloFBGUq6QPKwMOc-O9fCiCu29gsADAdZVrklZ-nKVDNqNh4GStsTAgkx-_9iIdr2mCOXh3bEaCvI_8fI2e8j51TfEyCEh3bqTooq9tvmZo"
                alt="Ingenieros revisando planos técnicos"
              />
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <h2 className="font-headline text-4xl font-bold text-white">
                Consultoría e Ingeniería
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="font-headline text-xl font-bold text-white mb-2">
                    Asesoría Técnica
                  </h4>
                  <p className="text-on-surface-variant">
                    Análisis de suelos, diseño de pavimentos y optimización de
                    materiales para reducir costos sin comprometer calidad.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="font-headline text-xl font-bold text-white mb-2">
                    Gestión de Proyectos
                  </h4>
                  <p className="text-on-surface-variant">
                    Administración integral del ciclo de vida de la obra, desde
                    la planeación hasta la entrega final certificada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lab & Additional Services */}
        <section className="py-24 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-surface-container p-8 rounded-xl flex flex-col justify-between border border-white/5">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-headline text-2xl font-bold text-white uppercase tracking-tight">
                  Laboratorio de Control
                </h3>
                <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-1 rounded font-bold uppercase">
                  Calibrando
                </span>
              </div>
              <p className="text-on-surface-variant mb-8 text-sm">
                Pruebas de calidad en sitio y en laboratorio para asegurar el
                cumplimiento de normativas SCT y estándares internacionales.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-primary uppercase mb-1">
                <span>Precisión de Ensayos</span>
                <span>98%</span>
              </div>
              <div className="h-4 bg-surface-container-highest rounded-full overflow-hidden blueprint-pattern border border-white/10">
                <div className="h-full bg-primary w-[98%]"></div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container p-8 rounded-xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-9xl">rocket_launch</span>
            </div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-headline text-2xl font-bold text-white uppercase tracking-tight">
                Servicios Adicionales
              </h3>
              <span className="bg-surface-container-highest text-on-surface-variant text-[10px] px-2 py-1 rounded font-bold uppercase">
                Próximamente
              </span>
            </div>
            <div className="space-y-4">
              {[
                "Señalamiento Vial Inteligente",
                "Mantenimiento de Áreas Verdes Industriales",
                "Soluciones Sustentables (Eco-Asfalto)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-on-surface-variant/50">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

const AsphaltCard = ({ icon, title, description, image, imageAlt }) => (
  <div className="group relative bg-surface-container-low p-8 rounded-xl overflow-hidden hover:bg-surface-container-high transition-all duration-300">
    <div className="absolute top-0 right-0 p-4 opacity-10">
      <span className="material-symbols-outlined text-6xl">{icon}</span>
    </div>
    <h3 className="font-headline text-xl font-bold text-primary mb-4">{title}</h3>
    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{description}</p>
    <img
      className="w-full h-40 object-cover rounded shadow-lg grayscale group-hover:grayscale-0 transition-all"
      src={image}
      alt={imageAlt}
    />
  </div>
);

export default ServicesPage;
