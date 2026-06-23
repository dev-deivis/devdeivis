import React, { useState, useEffect } from "react";
import "./App.css";
import { LINKS } from "./constants/links";
import TypingText from "./components/TypingText";
import LinkCard from "./components/LinkCard";
import profileAvatar from "./profile_avatar.jpg";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0e1117",
        fontFamily: "JetBrains Mono, monospace",
        display: "flex",
        justifyContent: "center",
        padding: "40px 16px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blobs de brillo de fondo */}
      <div style={{
        position: "fixed", top: "10%", left: "20%",
        width: "300px", height: "300px",
        background: "radial-gradient(circle, rgba(100,255,218,0.04) 0%, transparent 70%)",
        animation: "pulse 6s ease-in-out infinite",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "fixed", bottom: "20%", right: "15%",
        width: "250px", height: "250px",
        background: "radial-gradient(circle, rgba(199,146,234,0.05) 0%, transparent 70%)",
        animation: "pulse 8s ease-in-out infinite 2s",
        pointerEvents: "none",
      }} />

      <div style={{ width: "100%", maxWidth: "480px" }}>

        {/* Barra de la terminal */}
        <div className={`terminal-bar ${loaded ? "loaded" : ""}`}>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e" }} />
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px", marginLeft: "8px" }}>
            ~/devdeivis/links.jsx
          </span>
        </div>

        {/* Tarjeta principal */}
        <div className={`main-card ${loaded ? "loaded" : ""}`}>
          {/* Decoración de números de línea */}
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            paddingTop: "80px",
            opacity: 0.07,
            userSelect: "none",
            pointerEvents: "none",
          }} />

          {/* Perfil */}
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            {/* Avatar */}
            <div style={{ position: "relative", display: "inline-block", marginBottom: "20px" }}>
              <div style={{
                width: "88px", height: "88px",
                borderRadius: "50%",
                border: "2px solid rgba(100,255,218,0.4)",
                overflow: "hidden",
                margin: "0 auto",
                boxShadow: "0 0 32px rgba(100,255,218,0.12)",
              }}>
                <img
                  src={profileAvatar}
                  alt="David Almaraz"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              {/* Círculo online */}
              <div style={{
                position: "absolute", bottom: "4px", right: "4px",
                width: "12px", height: "12px",
                background: "#28c840", borderRadius: "50%",
                border: "2px solid #0e1117",
                boxShadow: "0 0 8px #28c840",
              }} />
            </div>

            {/* Nombre con efecto de escritura */}
            <div style={{ marginBottom: "8px", fontSize: "22px", fontWeight: 700 }}>
              <TypingText text="_devdeivis" speed={80} delay={400} color="#e2e8f0" />
            </div>

            {/* Biografía línea 1 */}
            <div style={{ fontSize: "12px", marginBottom: "4px", lineHeight: 1.6 }}>
              <TypingText text="Software Developer | APIs · IA + Vibe Coding" speed={28} delay={1000} color="#64ffda" />
            </div>

            {/* Biografía línea 2 */}
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", marginTop: "6px" }}>
              <TypingText text="Construyendo mi futuro 🧠 | Te doy consejos" speed={25} delay={2400} color="rgba(255,255,255,0.4)" />
            </div>
          </div>

          {/* Divisor */}
          <div style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(100,255,218,0.2), transparent)",
            marginBottom: "20px",
          }} />

          {/* Enlaces */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
            {LINKS.map((link, i) => (
              <LinkCard key={link.id} link={link} index={i} />
            ))}
          </div>

          {/* Iconos de redes sociales */}
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "24px" }}>
            {[
              {
                href: "https://www.instagram.com/_devdeivis/", label: "Instagram",
                color: "#e1306c", hoverColor: "#ff5c8a",
                icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>,
              },
              {
                href: "https://github.com/dev-deivis", label: "GitHub",
                color: "#e2e8f0", hoverColor: "#ffffff",
                icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>,
              },
              {
                href: "https://www.linkedin.com/in/alonso-david-almaraz-vásquez-87056334b", label: "LinkedIn",
                color: "#0a66c2", hoverColor: "#3b9eff",
                icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>,
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                title={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                style={{
                  color: s.color,
                  filter: `drop-shadow(0 0 5px ${s.color}88)`,
                  "--social-hover-color": s.hoverColor,
                  "--social-glow-color": s.color,
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Footer */}
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.15)", letterSpacing: "0.15em" }}>
              DAVID ALMARAZ © 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
