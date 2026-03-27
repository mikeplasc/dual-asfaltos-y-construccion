import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Entronque Metropolitano X-4",
      category: "Expansión de Autopista",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDAUZtmP5wKnbpT0sdRqWgr-NzZYNCsFz-XlJ4GDuiG4YZ1eR_Z_3g_KVM6mdT4TnZqIpOjP0urNx4YTouzMC1FVgc3DP2GwfN0cON2XWn2vpKqBjKTapgBWrzNon_BGAycnwQd_PecARxG2kCCoF66Tu9Frgt7_g9nhQgESCvLJMcTd0nJQv3UMyYivjSX6buc5wkeSenLD5z_OKjWplgDa7a5AhOiDUmI0WyJWqypFY9tO-or24ZbCK6zKb9bnfbzshYUn6ZwqD8y",
    },
    {
      title: "Terminal Logística Norte",
      category: "Hub Industrial",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCZb6o8Q-XY0MvQKZvELdWrNjSMwgC6K8Xbu7tIaQEqvaYWWo0qAnaPeoUA3eQ_OX-v0_FjiUGyURwPXUxoXyYJS_bO81zmC1ZNDmsgNBTaHull3HZbdVni-BBFMLo0ReimT1Q2rZ7VE3B-6EtUPD6CZwJu1LHTpSeAZjOEOv-EwMGz5IrDyqDwnClUdjyHciQJqoDNdsOeeruRBvqQcSd8rgHw9q7KKzrc8jg8KcQl4G-s-gqIxego7gRFov3CZWaC4xGoDQGUv8CB",
    },
    {
      title: "Repavimentación Pista Internacional",
      category: "Infraestructura Aeroespacial",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAwiU8qd-4S4MmeoPwDL--ZkTQgB5Ft0lFgdQePBZvg251UGVgPBMdccRWQyTBX3AoZeJiURu8Ajsin6fdnOzjt9EZEoKO0bKQv0cPBbjxrGEwMGVplmVjOKjPnzrBnSiw2f3A8L1-ioUAJxL-z5y1KhwG5YGCIYRsvZusA_fryURlHoG_iIKVpWWUfxjZODLrYsrARj24PeRL3R8y6hRk7DftUOr5zF6pvyKxmrLfKJyjhXuAQMg9xaV5J9C6TpT6rprJ1fmgINoU4",
    },
    {
      title: "Proyecto Carretero",
      category: "Construcción Vial",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAAMQW3XBCVl9rUXqyxw8bHLsuFZMlMTTKKtXAO50yfdaSKlk82WLxBXwMePLfXutNgyAlDYykX0CKQSjdGUTK3rrXSf36iiesrR71tP878-y8ib2wVCoShBQE8CT2XeNquXeLjUFwwnwZIsNbIU3G3l4yzJnRObj5Y7lPsNVbGWfF7eG0vdXj7mbi6XqdNvyWE2Vnn_ez02hXNYMdEnzokSvlnzPbyEYuSd_EAqXh-3tsVHBYojWB3rwvSgUGzpSJR8683YUpuRPxo",
    },
    {
      title: "Almacén Industrial",
      category: "Pavimentación Comercial",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCjpFgh_N9ZfbfVIlRP3f0FRVZNf_uG5neMLcMLPmzNGGMXbTNdy36slS8o2MOchXdF6ZWoGjrsi1pfTwOEk6hNlieiUCTJY6LgiW-kdMzGiij7aGSgFF-1q_iPxh1oke97DubRmCNbofYIbSRq33yxj7T1-7esfEmEKbAwEMnUgxmTjMzZt0RnWxI4-JhKwisMRRrkgdniwp-ekOQ38NTonuzOoS49YtQ-bXA-VgDuP3sEthGISnO7b4EYfwKeYYkk_J1--UHwa8Qx",
    },
    {
      title: "Reparación Asfáltica Urbana",
      category: "Mantenimiento",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBc_oLlW3X_W_HxcJ1A-3PAdOFBXWgIMbK2_NV4C27mTeSHSxHfntWWl5noOwV266GFBjDIgi4kJIEyAmgyYC-qLlfHjGQGl7j0v6PYaKQ6PmVpd-GvYmkLB4e_5xmuPiooH70OqVaeHXiLZK3dZuZQDGtdGe7A5vjmvlA4ImGSTuTak4yopwq70F_VvOLWrH9wVfN9mom_qspDHDt913vy5J6DwDL0KoOESHptgomZBFFxYSpUpVbacqaRCmz9pwljZj4Af-HsWsiG",
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
