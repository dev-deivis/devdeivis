import React, { useState, useEffect } from "react";

export default function LinkCard({ link, index }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 900 + index * 140);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-card ${visible ? "visible" : ""}`}
      style={{
        "--link-color": link.color,
        "--link-color-hover": `${link.color}12`,
        "--link-color-shadow": `${link.color}22`,
      }}
    >
      {/* Número de línea */}
      <span className="link-card-number">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Comentario */}
      <span className="link-card-comment comment">
        {link.comment}
      </span>

      {/* Icono */}
      <span className="link-card-icon" style={{ color: link.color }}>
        {link.icon}
      </span>

      {/* Etiqueta */}
      <span className="link-card-label">
        {link.label}
      </span>

      {/* Flecha indicadora */}
      <span className="link-card-arrow">
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </a>
  );
}
