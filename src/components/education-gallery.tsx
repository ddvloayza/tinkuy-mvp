"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const educationPhotos = [
  {
    src: "/images/educacion-inclusiva/actividad-colores.jpeg",
    alt: "Niño jugando con colores y materiales de aprendizaje",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/educacion-inclusiva/actividad-pintura.jpeg",
    alt: "Niño pintando durante una actividad creativa",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/educacion-inclusiva/actividad-aula.jpeg",
    alt: "Niño participando en una actividad dentro del aula",
    width: 591,
    height: 1280,
  },
];

export type GalleryPhoto = { src: string; alt: string; width: number; height: number };

export function CoverFlowGallery({ photos, title, label }: { photos: GalleryPhoto[]; title: string; label: string }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  function move(direction: -1 | 1) {
    setActive((current) => (current + direction + photos.length) % photos.length);
  }

  return (
    <section
      className="education-gallery"
      aria-label={label}
      aria-roledescription="carrusel"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div className="education-gallery-heading">
        <div>
          <span className="therapy-gallery-kicker">En imágenes</span>
          <h2>{title}</h2>
        </div>
        <div className="education-gallery-controls">
          <span aria-live="polite">{active + 1} de {photos.length}</span>
          <button type="button" onClick={() => move(-1)} aria-label="Ver foto anterior"><ChevronLeft size={20} /></button>
          <button type="button" onClick={() => move(1)} aria-label="Ver foto siguiente"><ChevronRight size={20} /></button>
        </div>
      </div>
      <div
        className="education-coverflow"
        onTouchStart={(event) => {
          const touch = event.changedTouches[0];
          touchStart.current = { x: touch.clientX, y: touch.clientY };
        }}
        onTouchEnd={(event) => {
          const start = touchStart.current;
          const touch = event.changedTouches[0];
          touchStart.current = null;
          if (!start) return;
          const horizontal = touch.clientX - start.x;
          const vertical = touch.clientY - start.y;
          if (Math.abs(horizontal) > 50 && Math.abs(horizontal) > Math.abs(vertical)) {
            move(horizontal < 0 ? 1 : -1);
          }
        }}
      >
        {photos.map((photo, index) => {
          const distance = (index - active + photos.length) % photos.length;
          const position = distance === 0 ? "center" : distance === 1 ? "right" : distance === photos.length - 1 ? "left" : "hidden";
          return (
            <button
              className="education-coverflow-card"
              data-position={position}
              type="button"
              key={photo.src}
              onClick={() => setActive(index)}
              aria-label={`Mostrar foto ${index + 1} de ${photos.length}: ${photo.alt}`}
              aria-current={index === active ? "true" : undefined}
              aria-hidden={position === "hidden"}
              tabIndex={position === "hidden" ? -1 : 0}
            >
              <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 600px) 76vw, 360px" />
            </button>
          );
        })}
      </div>
      <div className="education-gallery-dots" aria-hidden="true">
        {photos.map((photo, index) => <span key={photo.src} className={index === active ? "active" : ""} />)}
      </div>
    </section>
  );
}

export function EducationGallery() {
  return <CoverFlowGallery photos={educationPhotos} title="Aprender de muchas maneras" label="Galería de educación inclusiva" />;
}
