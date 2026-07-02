import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "919800000000";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi! I'd love to talk about my wedding film."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={() => setPulse(false)}
      className={`fixed z-[70] bottom-4 right-4 sm:bottom-6 sm:right-6 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="relative grid place-items-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)] group-hover:scale-110 active:scale-95 transition-transform">
        {pulse && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366]/60 animate-ping" />
            <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-pulse" />
          </>
        )}
        <svg viewBox="0 0 32 32" className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" aria-hidden>
          <path d="M19.11 17.24c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.63.14-.19.28-.72.91-.88 1.1-.16.19-.32.21-.6.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.47-.63-.48l-.54-.01c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.35s1 2.72 1.14 2.91c.14.19 1.97 3 4.77 4.21.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.66-.68 1.9-1.33.24-.65.24-1.21.17-1.33-.07-.12-.26-.19-.54-.33zM16.02 4C9.4 4 4.05 9.35 4.05 15.97c0 2.11.55 4.17 1.6 5.99L4 28l6.19-1.61a11.9 11.9 0 0 0 5.82 1.49h.01c6.62 0 11.98-5.35 11.98-11.97 0-3.2-1.25-6.2-3.5-8.46A11.9 11.9 0 0 0 16.02 4z" />
        </svg>
      </span>
    </a>
  );
}

