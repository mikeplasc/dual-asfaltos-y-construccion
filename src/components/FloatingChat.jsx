import React from "react";

const FloatingChat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5214494155314"; // Formato internacional sin + ni espacios
    const message = `Buen día, me comunico desde su página web.

Me interesa solicitar información sobre sus servicios de pavimentación y construcción, específicamente para:

[ Descripción breve del proyecto ]

Agradecería me puedan proporcionar:
• Información detallada de servicios
• Cotización estimada
• Tiempos de ejecución

Quedo al pendiente de su respuesta.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="fixed bottom-24 md:bottom-6 right-6 z-40">
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-primary rounded-full shadow-2xl flex items-center justify-center text-on-primary transition-transform hover:scale-110 active:scale-90"
        aria-label="Contactar por WhatsApp"
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          chat
        </span>
      </button>
    </div>
  );
};

export default FloatingChat;
