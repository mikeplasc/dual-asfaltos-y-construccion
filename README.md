# DUAL ASFALTOS - React Landing Page

Una página de presentación moderna y profesional para DUAL ASFALTOS Y CONSTRUCCIÓN, construida con React, Vite y Tailwind CSS.

## 🎨 Diseño

Esta aplicación sigue el sistema de diseño "Industrial Precision & Digital Depth" con:

- **Paleta de colores**: Tonos industriales oscuros (navy profundo, azul brillante)
- **Tipografías**: Space Grotesk (headlines) e Inter (body)
- **Filosofía**: Diseño tipo "Architectural Monolith" con glassmorphism y efectos de profundidad

## 🚀 Características

- ✅ **100% Responsive** - Optimizado para mobile y desktop
- ✅ **Navegación móvil inferior** - Mejor accesibilidad en dispositivos móviles
- ✅ **Efectos visuales avanzados** - Glassmorphism, gradientes industriales, grid textures
- ✅ **Secciones completas**:
  - Hero con estadísticas
  - Servicios (Bento Grid en desktop, cards en mobile)
  - Sobre nosotros con ventajas competitivas
  - Portfolio de proyectos
  - Formulario de contacto
- ✅ **Componentes reutilizables** - Arquitectura modular y mantenible

## 📦 Instalación

1. Navega al directorio del proyecto:

```bash
cd dual-asfaltos-react
```

2. Instala las dependencias:

```bash
npm install
```

## 🏃 Ejecutar en desarrollo

```bash
npm run dev
```

Abre tu navegador en [http://localhost:5173](http://localhost:5173)

## 🏗️ Build para producción

```bash
npm run build
```

Esto creará una carpeta `dist/` con los archivos optimizados para producción.

## 🌐 Desplegar en Internet

### Opción 1: Vercel (Recomendado - Gratis)

1. Instala Vercel CLI:

```bash
npm install -g vercel
```

2. Desde la carpeta del proyecto:

```bash
vercel
```

3. Sigue las instrucciones y obtendrás una URL como: `https://dual-asfaltos.vercel.app`

### Opción 2: Netlify (Muy fácil - Gratis)

1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `dist/` después de hacer `npm run build`
3. O conecta tu repositorio de GitHub
4. ¡Listo! URL: `https://dual-asfaltos.netlify.app`

### Opción 3: GitHub Pages (Gratis)

Agrega esto a `package.json`:

```json
"homepage": "https://TU-USUARIO.github.io/dual-asfaltos",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Luego:

```bash
npm install --save-dev gh-pages
npm run deploy
```

## 📈 SEO y Posicionamiento

Para aparecer en Google cuando busquen "pavimentación", "construcción", "carreteras":

1. **Lee la guía completa**: Ver archivo `SEO-GUIA.md`
2. **Configura Google My Business** (gratis y esencial)
3. **Registra en Google Search Console** (gratis)
4. **Publica el sitio** con un dominio propio

### SEO ya implementado en el sitio:

✅ Meta tags optimizados
✅ Keywords de pavimentación y construcción
✅ Schema.org (datos estructurados)
✅ Open Graph (redes sociales)
✅ robots.txt y sitemap.xml
✅ Contenido optimizado para buscadores

## 🔧 Build para producción (manual)

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/`.

## 📱 Vista previa del build

```bash
npm run preview
```

## 🗂️ Estructura del proyecto

```
dual-asfaltos-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navegación principal (desktop y mobile)
│   │   ├── Hero.jsx            # Sección hero con imagen de fondo
│   │   ├── Services.jsx        # Grid de servicios (adaptable)
│   │   ├── About.jsx           # Sobre nosotros + ventajas
│   │   ├── Portfolio.jsx       # Galería de proyectos
│   │   ├── Contact.jsx         # Formulario de contacto
│   │   ├── Footer.jsx          # Footer con links
│   │   ├── MobileNav.jsx       # Navegación inferior para móvil
│   │   └── FloatingChat.jsx    # Botón de chat flotante
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx               # Entry point
│   └── index.css              # Estilos globales y utilidades
├── index.html
├── tailwind.config.js         # Configuración con colores personalizados
├── vite.config.js
└── package.json
```

## 🎨 Personalización

### Colores

Los colores están definidos en `tailwind.config.js` siguiendo el sistema de diseño. Puedes modificarlos allí.

### Tipografías

Las fuentes Space Grotesk e Inter se cargan desde Google Fonts en `index.html`.

### Contenido

Cada componente en `src/components/` puede ser editado independientemente para cambiar textos, imágenes o estructura.

## 🌐 Navegación

La navegación utiliza anclas (#) para scroll suave entre secciones:

- `#servicios` - Sección de servicios
- `#proyectos` - Portfolio de proyectos
- `#nosotros` - Sobre nosotros
- `#contacto` - Formulario de contacto

## 📱 Responsive Design

- **Mobile**: Navegación inferior con 3 opciones principales + menú hamburguesa
- **Tablet/Desktop**: Navegación superior con todas las opciones visibles
- Breakpoints: Tailwind CSS defaults (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)

## 🛠️ Tecnologías

- **React 18** - Library de UI
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS 3** - Framework de CSS utility-first
- **Material Symbols** - Iconos de Google
- **Google Fonts** - Space Grotesk e Inter

## 📄 Licencia

© 2026 DUAL ASFALTOS Y CONSTRUCCIÓN. Todos los derechos reservados.
