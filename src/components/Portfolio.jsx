import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Vialidad Residencial",
      category: "Infraestructura Vial",
      image: "/images/image18.jpeg",
    },
    {
      title: "Nave Industrial",
      category: "Hub Industrial",
      image: "/images/image21.jpeg",
    },
    {
      title: "Fraccionamiento Residencial",
      category: "Desarrollo Habitacional",
      image: "/images/image13.jpeg",
    },
    {
      title: "Colado de Losa",
      category: "Construcción Civil",
      image: "/images/image19.jpeg",
    },
    {
      title: "Bodega Comercial",
      category: "Proyecto Industrial",
      image: "/images/image10.jpeg",
    },
    {
      title: "Urbanización y Perimetral",
      category: "Obra Civil",
      image: "/images/image3.jpeg",
    },
  ];

  return (
    <section
      id="proyectos"
      className="py-16 md:py-32 bg-surface-dim relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-texture opacity-10"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4">
          <div className="space-y-2">
            <span className="text-primary font-headline text-xs font-bold uppercase tracking-[0.3em] block">
              Trabajos Seleccionados
            </span>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-white tracking-tight">
              PORTAFOLIO DE PROYECTOS
            </h2>
          </div>
        </div>

        {/* Portfolio Grid - Desktop (3 columns) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Portfolio Grid - Mobile (2 columns) */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {projects.map((project, index) => (
            <ProjectCardMobile key={index} {...project} />
          ))}
        </div>

        {/* View All Button - Mobile */}
        <div className="md:hidden mt-8 flex justify-center">
          <button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            Ver Galería Completa →
          </button>
        </div>
      </div>
    </section>
  );
};

// Desktop Project Card
const ProjectCard = ({ title, category, image }) => (
  <div className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer">
    <img
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
      src={image}
      alt={title}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent"></div>
    <div className="absolute bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
      <p className="text-primary font-headline text-[10px] font-bold uppercase tracking-widest mb-2">
        {category}
      </p>
      <h4 className="text-white font-headline font-bold text-xl mb-4">
        {title}
      </h4>
    </div>
  </div>
);

// Mobile Project Card
const ProjectCardMobile = ({ title, category, image }) => (
  <div className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer">
    <img
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      src={image}
      alt={title}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-80"></div>
  </div>
);

export default Portfolio;
